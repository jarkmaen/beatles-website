export interface Blog {
    id: number;
    author: string;
    content: BlogContent;
    intro: string;
    slug: string;
    title: string;
    createdAt: Date;
}

export interface BlogState {
    blogs: Blog[];
    loading: boolean;
}

export interface DefaultRanking {
    type: "default_ranking";
}

export interface ManualRanking {
    type: "manual_ranking";
    items: {
        commentary: string;
        rank: number;
        title: string;
    }[];
}

export interface Message {
    email: string;
    firstName: string | null;
    lastName: string | null;
    message: string;
}

export interface Song {
    id: number;
    album: string;
    commentary: string;
    commentaryLanding: string | null;
    rank: number;
    songRatings: SongRating[];
    title: string;
}

export interface SongRating {
    id: number;
    song_id: number;
    bassline: number | null;
    chordProgression: number | null;
    culturalSignificance: number | null;
    fullInstrumentation: number | null;
    lyrics: number | null;
    originalityInnovation: number | null;
    percentage: number | null;
    percussion: number | null;
    solo: number | null;
    vocals: number | null;
}

export interface SongState {
    songOfTheDay: Song | null;
    songs: Song[];
}

export interface Text {
    type: "text";
    items: (
        | { type: "heading"; text: string }
        | { type: "paragraph"; text: string }
    )[];
}

export type BlogContent = DefaultRanking | ManualRanking | Text;

export type SortDirection = "asc" | "desc" | null;
