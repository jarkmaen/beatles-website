export const albums = [
    { label: "A Hard Day's Night", value: "A Hard Day's Night" },
    { label: "Abbey Road", value: "Abbey Road" },
    { label: "Beatles for Sale", value: "Beatles for Sale" },
    { label: "Help!", value: "Help!" },
    { label: "Let It Be", value: "Let It Be" },
    { label: "Let It Be... Naked", value: "Let It Be... Naked" },
    { label: "Magical Mystery Tour", value: "Magical Mystery Tour" },
    { label: "Please Please Me", value: "Please Please Me" },
    { label: "Revolver", value: "Revolver" },
    { label: "Rubber Soul", value: "Rubber Soul" },
    {
        label: "Sgt. Pepper's Lonely Hearts Club Band",
        value: "Sgt. Pepper's Lonely Hearts Club Band"
    },
    { label: "Singles", value: "Single" },
    { label: "The Beatles (White Album)", value: "The Beatles (White Album)" },
    { label: "With the Beatles", value: "With the Beatles" },
    { label: "Yellow Submarine", value: "Yellow Submarine" }
] as const;

export type Album = (typeof albums)[number];
