import RankedSong from "./RankedSong";
import type { BlogContentBlock } from "../types";
import type { RootState } from "../store";
import { useSelector } from "react-redux";

type Props = {
    block: BlogContentBlock;
};

const BlogContent = ({ block }: Props) => {
    const songs = useSelector((state: RootState) => state.songs.songs);

    switch (block.type) {
        case "default_ranking": {
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
        case "manual_ranking": {
            return (
                <div className="space-y-8">
                    {block.items.map((item, i) => (
                        <div key={i}>
                            <h1 className="font-bold">{item.title}</h1>
                            <p className="mt-2">{item.commentary}</p>
                        </div>
                    ))}
                </div>
            );
        }
        case "text": {
            return (
                <div className="dark:prose-invert max-w-none prose prose-lg">
                    {block.paragraphs.map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                    ))}
                </div>
            );
        }
        default:
            return null;
    }
};

export default BlogContent;
