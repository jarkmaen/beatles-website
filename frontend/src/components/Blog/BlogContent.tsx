import * as T from "../../types";
import RankedSong from "./RankedSong";
import ReactMarkdown from "react-markdown";
import type { RankedItem } from "../../types";
import type { RootState } from "../../store";
import { BLOG_CONTENT_TYPES } from "../../constants/blogContentTypes";
import { MarkdownH3 } from "../MarkdownConfig";
import { useSelector } from "react-redux";

type Props = {
    content: T.BlogContent;
};

const BlogContent = ({ content }: Props) => {
    const songs = useSelector((state: RootState) => state.songs.songs);

    const renderSongs = (items: RankedItem[]) =>
        items.map((song, i) => (
            <RankedSong
                bottom={i === items.length - 1}
                commentary={song.commentary}
                key={i}
                rank={song.rank}
                title={song.title}
            />
        ));

    switch (content.type) {
        case BLOG_CONTENT_TYPES.DEFAULT_RANKING: {
            return renderSongs([...songs].sort((a, b) => b.rank - a.rank));
        }
        case BLOG_CONTENT_TYPES.MANUAL_RANKING: {
            return renderSongs(content.items);
        }
        case BLOG_CONTENT_TYPES.MARKDOWN: {
            return (
                <div className="dark:prose-invert hyphens-auto max-w-none md:prose-lg prose">
                    <ReactMarkdown components={{ h3: MarkdownH3 }}>
                        {content.text}
                    </ReactMarkdown>
                </div>
            );
        }
        default: {
            return null;
        }
    }
};

export default BlogContent;
