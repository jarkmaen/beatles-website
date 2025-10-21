import RankedSong from "./RankedSong";
import type { RootState } from "../store";
import { useSelector } from "react-redux";

const BlogPost = () => {
    const songs = useSelector((state: RootState) => state.songs.songs);

    return (
        <div className="max-w-4xl mx-auto">
            <div className="mb-12">
                <h1 className="dark:text-dark font-bold font-lora text-6xl text-center text-light">
                    The Beatles: Ranked
                </h1>
                <div className="dark:text-gray-400 flex items-center justify-center mb-8 mt-8 space-x-4 text-gray-500 text-sm">
                    <span>October 21, 2025</span>
                    <span className="dark:text-gray-500 select-none text-gray-400">
                        |
                    </span>
                    <span>Author</span>
                </div>
                <div className="dark:text-gray-300 max-w-none mx-auto prose text-gray-600">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut
                        odit aut fugit, sed quia consequuntur magni dolores eos
                        qui ratione voluptatem sequi nesciunt. Neque porro
                        quisquam est, qui dolorem ipsum quia dolor sit amet,
                        consectetur, adipisci velit, sed quia non numquam eius
                        modi tempora incidunt ut labore et dolore magnam aliquam
                        quaerat voluptatem. Ut enim ad minima veniam, quis
                        nostrum exercitationem ullam corporis suscipit
                        laboriosam, nisi ut aliquid ex ea commodi consequatur?
                    </p>
                </div>
            </div>
            <div className="space-y-8">
                {songs.map((song, i) => (
                    <div key={song.id}>
                        <RankedSong
                            bottom={i === songs.length - 1}
                            commentary={song.commentary}
                            rank={song.rank}
                            title={song.title}
                            top={i === 0}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogPost;
