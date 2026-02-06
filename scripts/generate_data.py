import csv
import pandas as pd
import pathlib
import sys

ROOT = pathlib.Path(__file__).parent
DATA_DIR = ROOT / "data"
OUTPUT_DIR = ROOT / "output"


def parse_commentary_to_csv(input_filename, output_filename):
    input_path = DATA_DIR / input_filename
    output_path = OUTPUT_DIR / output_filename

    with open(input_path, "r", encoding="utf-8") as f:
        content = f.read()
        blocks = content.strip().split("\n\n")

    rows = []

    for block in blocks:
        lines = block.strip().split("\n")

        header = lines[0]
        parts = header.split(" ", 1)
        rank = parts[0]
        title = parts[1]

        commentary = "\n".join(lines[1:])

        # normalize punctuation
        commentary = (
            commentary.replace("…", "...").replace("“", '"').replace("”", '"').replace("‘", "'").replace("’", "'")
        )

        rows.append((rank, title, commentary))

    with open(output_path, "w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        writer.writerow(["rank", "title", "commentary"])
        writer.writerows(rows)


def generate_song_ratings():
    df = pd.read_csv(DATA_DIR / "spreadsheet.csv")

    # drop columns not needed for ratings table
    df = df.drop(columns=["Album", "Title", "Rank", "Total Points", "Total Potential Points"])

    # convert "45.45%" -> 45.45
    df["Percentage"] = df["Percentage"].str.replace("%", "").astype(float)

    df = df.rename(
        columns={
            "Bassline": "bassline",
            "Chord Progression": "chord_progression",
            "Cultural Significance": "cultural_significance",
            "Full Instrumentation": "full_instrumentation",
            "ID": "song_id",
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
            "song_id",
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
        "song_id",
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

    df.to_csv(OUTPUT_DIR / "song_ratings.csv", index=False)


def generate_songs():
    df = pd.read_csv(DATA_DIR / "spreadsheet.csv")

    # select columns needed for songs table
    df = df[["Album", "Rank", "Title"]]
    df = df.rename(columns={"Album": "album", "Rank": "rank", "Title": "title"})

    # add commentary by matching title -> commentary
    commentary_df = pd.read_csv(OUTPUT_DIR / "commentary.csv")
    df = df.merge(commentary_df[["commentary", "title"]], how="left", on="title")
    df["commentary"] = df["commentary"].fillna("TBA")

    # add landing commentary by matching title -> commentary
    commentary_landing_df = pd.read_csv(OUTPUT_DIR / "commentary_landing.csv")
    commentary_landing_df = commentary_landing_df.rename(columns={"commentary": "commentary_landing"})
    df = df.merge(commentary_landing_df[["commentary_landing", "title"]], how="left", on="title")
    df["commentary_landing"] = df["commentary_landing"].fillna("")

    df = df[
        [
            "album",
            "commentary",
            "commentary_landing",
            "rank",
            "title",
        ]
    ]

    df["rank"] = df["rank"].astype("Int64")

    df.to_csv(OUTPUT_DIR / "songs.csv", index=False)


def main():
    required_input_files = [
        DATA_DIR / "commentary.txt",
        DATA_DIR / "commentary_landing.txt",
        DATA_DIR / "spreadsheet.csv",
    ]

    for f in required_input_files:
        if not f.exists():
            print("Missing file:", f)
            sys.exit(1)

    OUTPUT_DIR.mkdir(exist_ok=True)

    parse_commentary_to_csv("commentary.txt", "commentary.csv")
    parse_commentary_to_csv("commentary_landing.txt", "commentary_landing.csv")

    generate_song_ratings()

    required_output_files = [OUTPUT_DIR / "commentary.csv", OUTPUT_DIR / "commentary_landing.csv"]

    for f in required_output_files:
        if not f.exists():
            print("Missing file:", f)
            sys.exit(1)

    generate_songs()


if __name__ == "__main__":
    main()
