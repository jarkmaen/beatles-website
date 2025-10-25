export const albums = [
    "A Hard Day's Night",
    "Abbey Road",
    "Beatles for Sale",
    "Help!",
    "Let It Be",
    "Let It Be... Naked",
    "Magical Mystery Tour",
    "Please Please Me",
    "Revolver",
    "Rubber Soul",
    "Sgt. Pepper's Lonely Hearts Club Band",
    "Singles",
    "The Beatles (White Album)",
    "With the Beatles",
    "Yellow Submarine"
] as const;

export type Album = (typeof albums)[number];
