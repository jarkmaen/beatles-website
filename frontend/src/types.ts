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
