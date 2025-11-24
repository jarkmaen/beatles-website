export type TableHeaderDef = {
    label: string;
    sortKey: string | null;
    tooltip: string;
};

export const tableHeaderData: TableHeaderDef[] = [
    { label: "#", sortKey: "rank", tooltip: "SONG RANK" },
    { label: "SONG", sortKey: "title", tooltip: "THE TITLE OF THE SONG" },
    {
        label: "FULL INSTRUMENTATION",
        sortKey: "full_instrumentation",
        tooltip:
            "0-1: HURTS THE SONG\n2-4: DOES THE JOB\n5-7: SUITS THE SONG\n8-10: LIFTS THE SONG"
    },
    {
        label: "VOCALS",
        sortKey: "vocals",
        tooltip:
            "0-3: GOOD, NOTHING SPECIAL\n4-6: GOOD WITH STANDOUT MOMENTS\n7-8: ALLROUND GREAT VOCALS\n9-10: EXCEPTIONAL (LEAD/HARMONIES)"
    },
    {
        label: "LYRICS",
        sortKey: "lyrics",
        tooltip:
            "0-2: LYRICS LACK QUALITY\n3-4: BASIC LYRICS\n5-6: LYRICS ADD VALUE TO THE SONG\n7-8: STANDOUT LYRICS"
    },
    {
        label: "ORIGINALITY/INNOVATION",
        sortKey: "originality_innovation",
        tooltip:
            "0-2: NOT PARTICULARLY INNOVATIVE\n3-4: HAS AN ORIGINAL ELEMENT\n5-6: NOTICABLY ORIGINAL\n7-8: GROUNDBREAKING"
    },
    {
        label: "BASSLINE",
        sortKey: "bassline",
        tooltip: "0-1: DOES THE JOB\n2-3: ADDS TO THE SONG\n4-5: STANDOUT BASS"
    },
    {
        label: "PERCUSSION",
        sortKey: "percussion",
        tooltip:
            "0-1: DOES THE JOB\n2-3: ADDS TO THE SONG\n4-5: STANDOUT PERCUSSION"
    },
    {
        label: "SOLO",
        sortKey: "solo",
        tooltip: "0: LACKLUSTER\n1-3: SOLID SOLO\n4: LIFTS THE SONG"
    },
    {
        label: "CHORD PROGRESSION",
        sortKey: "chord_progression",
        tooltip: "0-2: FUNCTIONAL\n3-4: ELEVATES THE SONG"
    },
    {
        label: "CULTURAL SIGNIFICANCE",
        sortKey: "cultural_significance",
        tooltip: "0: NO SPECIAL SIGNIFICANCE\n1: A SPECIAL SIGNIFICANCE"
    },
    {
        label: "TOTAL POINTS",
        sortKey: null,
        tooltip: "SUMMED POINTS / MAX POTENTIAL POINTS\n(ONLY RATED CATEGORIES)"
    }
];
