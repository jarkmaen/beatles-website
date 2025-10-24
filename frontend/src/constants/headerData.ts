export type HeaderDef = {
    title: string;
    tooltip: string;
};

export const headerData: HeaderDef[] = [
    { title: "#", tooltip: "SONG RANK" },
    { title: "SONG", tooltip: "THE TITLE OF THE SONG" },
    {
        title: "FULL INSTRUMENTATION",
        tooltip:
            "0-1: HURTS THE SONG\n2-4: DOES THE JOB\n5-7: SUITS THE SONG\n8-10: LIFTS THE SONG"
    },
    {
        title: "VOCALS",
        tooltip:
            "0-3: GOOD, NOTHING SPECIAL\n4-6: GOOD WITH STANDOUT MOMENTS\n7-8: ALLROUND GREAT VOCALS\n9-10: EXCEPTIONAL (LEAD/HARMONIES)"
    },
    {
        title: "LYRICS",
        tooltip:
            "0-2: LYRICS LACK QUALITY\n3-4: BASIC LYRICS\n5-6: LYRICS ADD VALUE TO THE SONG\n7-8: STANDOUT LYRICS"
    },
    {
        title: "ORIGINALITY / INNOVATION",
        tooltip:
            "0-2: NOT PARTICULARLY INNOVATIVE\n3-4: HAS AN ORIGINAL ELEMENT\n5-6: NOTICABLY ORIGINAL\n7-8: GROUNDBREAKING"
    },
    {
        title: "BASSLINE",
        tooltip: "0-1: DOES THE JOB\n2-3: ADDS TO THE SONG\n4-5: STANDOUT BASS"
    },
    {
        title: "PERCUSSION",
        tooltip:
            "0-1: DOES THE JOB\n2-3: ADDS TO THE SONG\n4-5: STANDOUT PERCUSSION"
    },
    {
        title: "SOLO",
        tooltip: "0: LACKLUSTER\n1-3: SOLID SOLO\n4: LIFTS THE SONG"
    },
    {
        title: "CHORD PROGRESSION",
        tooltip: "0-2: FUNCTIONAL\n3-4: ELEVATES THE SONG"
    },
    {
        title: "CULTURAL SIGNIFICANCE",
        tooltip: "0: NO SPECIAL SIGNIFICANCE\n1: A SPECIAL SIGNIFICANCE"
    },
    { title: "TOTAL POINTS", tooltip: "" }
];
