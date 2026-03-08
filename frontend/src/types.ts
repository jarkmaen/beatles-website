import type { AlbumName } from "./constants/albums";
import type { Parameter } from "./constants/parameters";
import { BLOG_CONTENT_TYPES } from "./constants/blogContentTypes";

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
    type: typeof BLOG_CONTENT_TYPES.DEFAULT_RANKING;
}

export interface ManualRanking {
    type: typeof BLOG_CONTENT_TYPES.MANUAL_RANKING;
    items: RankedItem[];
}

export interface Markdown {
    type: typeof BLOG_CONTENT_TYPES.MARKDOWN;
    text: string;
}

export interface Message {
    email: string;
    firstName: string | null;
    lastName: string | null;
    message: string;
}

export interface RankedItem {
    commentary: string;
    rank: number;
    title: string;
}

export interface Song {
    id: number;
    album: AlbumName;
    commentary: string;
    commentaryLanding: string | null;
    rank: number;
    songRatings: SongRating[];
    title: string;
}

export interface SongRating extends Record<Parameter, number | null> {
    id: number;
    songId: number;
    percentage: number | null;
}

export interface SongState {
    songOfTheDay: Song | null;
    songs: Song[];
}

export type BlogContent = DefaultRanking | ManualRanking | Markdown;
export type SortDirection = "asc" | "desc" | null;
