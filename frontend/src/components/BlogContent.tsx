import RankedSong from "./RankedSong";
import type { BlogContent as BlogContentType } from "../types";
import type { RootState } from "../store";
import { blogContentTypes } from "../constants/blogContentTypes";
import { useSelector } from "react-redux";

type Props = {
    content: BlogContentType;
};

const BlogContent = ({ content }: Props) => {
    const songs = useSelector((state: RootState) => state.songs.songs);

    switch (content.type) {
        case blogContentTypes.defaultRanking: {
            return (
                <div className="space-y-8">
                    {songs
                        .slice()
                        .sort((a, b) => b.rank - a.rank)
                        .map((song, i) => (
                            <div key={song.id}>
                                <RankedSong
                                    bottom={i === songs.length - 1}
                                    commentary={song.commentary}
                                    rank={song.rank}
                                    title={song.title}
                                />
                            </div>
                        ))}
                </div>
            );
        }
        case blogContentTypes.manualRanking: {
            return (
                <div className="space-y-8">
                    {content.items.map((item, i) => (
                        <div key={i}>
                            <RankedSong
                                bottom={i === content.items.length - 1}
                                commentary={item.commentary}
                                rank={item.rank}
                                title={item.title}
                            />
                        </div>
                    ))}
                </div>
            );
        }
        case blogContentTypes.text: {
            return (
                <div className="dark:prose-invert hyphens-auto max-w-none prose sm:prose-lg">
                    {content.items.map((item, i) => {
                        if (item.type === "heading") {
                            return (
                                <h3 className="dark:text-primary-dark font-lora sm:text-4xl text-2xl text-primary-light" key={i}>
                                    {item.text}
                                </h3>
                            );
                        } else if (item.type === "paragraph") {
                            return <p key={i}>{item.text}</p>;
                        }
                    })}
                </div>
            );
        }
        default: {
            return null;
        }
    }
};

export default BlogContent;
