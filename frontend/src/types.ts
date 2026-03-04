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
    firstName?: string | null;
    lastName?: string | null;
    message: string;
}

export interface Song {
    id: number;
    album: string;
    commentary: string;
    commentaryLanding?: string | null;
    rank: number;
    SongRatings?: SongRating[];
    title: string;
}

export interface SongRating {
    id: number;
    song_id: number;
    bassline?: number;
    chordProgression?: number;
    culturalSignificance?: number;
    fullInstrumentation?: number;
    lyrics?: number;
    originalityInnovation?: number;
    percentage?: number;
    percussion?: number;
    solo?: number;
    vocals?: number;
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
