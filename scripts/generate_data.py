import csv
import pandas as pd
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).parent
DATA_DIR = ROOT / "data"
OUTPUT_DIR = ROOT / "output"


def generate_commentary_rank_map():
    input_path = DATA_DIR / "commentary.txt"
    output_path = OUTPUT_DIR / "commentary_rank_map.csv"

    pattern = re.compile(r"^\s*(\d+)\s+(.+?)\s*$", re.MULTILINE)
    text = input_path.read_text(encoding="utf-8")
    matches = list(pattern.finditer(text))

    rows = []

    for i, m in enumerate(matches):
        rank = int(m.group(1))
        start = m.end()

        if i + 1 < len(matches):
            end = matches[i + 1].start()
        else:
            end = len(text)

        commentary = text[start:end].strip()

        # normalize a few punctuation variants
        commentary = (
            commentary.replace("…", "...").replace("“", '"').replace("”", '"').replace("‘", "'").replace("’", "'")
        )

        rows.append((commentary, rank))

    with output_path.open("w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        writer.writerow(["commentary", "rank"])
        writer.writerows(rows)


def generate_song_ratings():
    df = pd.read_csv(DATA_DIR / "spreadsheet.csv")

    # drop columns not needed for ratings table
    df = df.drop(columns=["N", "Song", "Total Points", "Total Potential Points"])

    # convert "45.45%" -> 45.45
    df["Percentage"] = df["Percentage"].str.replace("%", "").astype(float)

    df = df.rename(
        columns={
            "Bassline": "bassline",
            "Chord Progression": "chord_progression",
            "Cultural Significance": "cultural_significance",
            "Full Instrumentation": "full_instrumentation",
            "Lyrics": "lyrics",
            "Originality / Innovation": "originality_innovation",
            "Percentage": "percentage",
            "Percussion": "percussion",
            "Solo": "solo",
            "Vocals": "vocals",
        }
    )

    df = df[
        [
            "bassline",
            "chord_progression",
            "cultural_significance",
            "full_instrumentation",
            "lyrics",
            "originality_innovation",
            "percentage",
            "percussion",
            "solo",
            "vocals",
        ]
    ]

    # use pandas nullable integer dtype for rating columns
    int_cols = [
        "bassline",
        "chord_progression",
        "cultural_significance",
        "full_instrumentation",
        "lyrics",
        "originality_innovation",
        "percussion",
        "solo",
        "vocals",
    ]

    for col in int_cols:
        df[col] = df[col].astype("Int64")

    # add a simple incremental song_id
    df.insert(0, "song_id", range(1, len(df) + 1))

    df.to_csv(OUTPUT_DIR / "song_ratings.csv", index=False)


def generate_songs():
    df = pd.read_csv(DATA_DIR / "spreadsheet.csv")

    # select columns needed for songs table
    df = df[["N", "Song", "Percentage"]]

    # convert "45.45%" -> 45.45
    df["Percentage"] = df["Percentage"].str.replace("%", "").astype(float)

    df = df.rename(columns={"Song": "title"})

    # calculate ranking based on percentage
    df = df.sort_values(by=["Percentage", "N"], ascending=False).reset_index(drop=True)
    df["Percentage"] = df.index + 1
    df = df.rename(columns={"Percentage": "rank"})

    df = df.sort_values(by="N").reset_index(drop=True)

    # add album by matching title -> album
    album_map = pd.read_csv(DATA_DIR / "album_title_map.csv")
    df = df.merge(album_map, how="left", on="title")

    # add commentary by matching rank -> commentary
    commentary_map = pd.read_csv(OUTPUT_DIR / "commentary_rank_map.csv")
    df = df.merge(commentary_map, how="left", on="rank")
    df["commentary"] = df["commentary"].fillna("TBA")

    # required DB column (unused for now)
    df["commentary_landing"] = ""

    df = df[
        [
            "album",
            "commentary",
            "commentary_landing",
            "rank",
            "title",
        ]
    ]

    df.to_csv(OUTPUT_DIR / "songs.csv", index=False)


def main():
    required_files = [
        DATA_DIR / "album_title_map.csv",
        DATA_DIR / "commentary.txt",
        DATA_DIR / "spreadsheet.csv",
    ]

    for f in required_files:
        if not f.exists():
            print("Missing file:", f)
            sys.exit(1)

    OUTPUT_DIR.mkdir(exist_ok=True)

    generate_commentary_rank_map()
    generate_song_ratings()

    if not (OUTPUT_DIR / "commentary_rank_map.csv").exists():
        print("Missing file:", OUTPUT_DIR / "commentary_rank_map.csv")
        sys.exit(1)

    generate_songs()


if __name__ == "__main__":
    main()
