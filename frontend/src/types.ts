export interface Blog {
    id: number;
    author: string;
    content: BlogContent;
    intro: string;
    slug: string;
    title: string;
    created_at: Date;
}

export interface BlogsState {
    blogs: Blog[];
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
    first_name?: string | null;
    last_name?: string | null;
    message: string;
}

export interface Song {
    id: number;
    album: string;
    commentary: string;
    commentary_landing?: string | null;
    rank: number;
    SongRatings?: SongRating[];
    title: string;
}

export interface SongRating {
    id: number;
    song_id: number;
    bassline?: number;
    chord_progression?: number;
    cultural_significance?: number;
    full_instrumentation?: number;
    lyrics?: number;
    originality_innovation?: number;
    percentage?: number;
    percussion?: number;
    solo?: number;
    vocals?: number;
}

export interface SongsState {
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
