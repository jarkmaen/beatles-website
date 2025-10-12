import sgtPeppersLonelyHeartsClubBandImage from "../assets/images/sgt_peppers_lonely_hearts_club_band.jpg";
import type { RootState } from "../store.ts";
import { useSelector } from "react-redux";

const Home = () => {
    const songs = useSelector((state: RootState) => state.songs.songs);

    console.log(songs);

    return (
        <>
            <div className="flex flex-row gap-8 items-center justify-center">
                <img
                    className="h-56 object-cover rounded-lg shadow-2xl w-56"
                    src={sgtPeppersLonelyHeartsClubBandImage}
                />
                <div>
                    <h2 className="dark:text-gray-400 font-body mb-2 text-gray-500 text-xl tracking-widest">
                        BEATLES SONG OF THE DAY
                    </h2>
                    <h1 className="dark:text-dark font-bold font-lora text-6xl text-light">
                        A Day in the Life
                    </h1>
                    <p className="dark:text-gray-300 font-body text-2xl text-gray-600">
                        Sgt. Pepper's Lonely Hearts Club Band
                    </p>
                </div>
            </div>
            <div className="gap-12 grid grid-cols-2 max-w-4xl mt-16 mx-auto">
                <div className="space-y-4">
                    <h3 className="dark:text-dark font-bold font-lora text-2xl text-light">
                        Rating Breakdown
                    </h3>
                    <div className="space-y-3">
                        {/* Full Instrumentation 10/10 */}
                        <div className="relative">
                            <div className="dark:text-dark flex justify-between text-light">
                                <span>Full Instrumentation</span>
                                <span className="font-bold">100%</span>
                            </div>
                            <div className="bg-gray-200 dark:bg-gray-700 h-2.5 mt-1 rounded-full w-full">
                                <div className="bg-gradient-to-r from-excellent-start h-2.5 rounded-full to-excellent-end w-[100%]"></div>
                            </div>
                        </div>
                        {/* Lyrics 8/8 */}
                        <div className="relative">
                            <div className="dark:text-dark flex justify-between text-light">
                                <span>Lyrics</span>
                                <span className="font-bold">100%</span>
                            </div>
                            <div className="bg-gray-200 dark:bg-gray-700 h-2.5 mt-1 rounded-full w-full">
                                <div className="bg-gradient-to-r from-excellent-start h-2.5 rounded-full to-excellent-end w-[100%]"></div>
                            </div>
                        </div>
                        {/* Originality/Innovation 8/8 */}
                        <div className="relative">
                            <div className="dark:text-dark flex justify-between text-light">
                                <span>Originality/Innovation</span>
                                <span className="font-bold">100%</span>
                            </div>
                            <div className="bg-gray-200 dark:bg-gray-700 h-2.5 mt-1 rounded-full w-full">
                                <div className="bg-gradient-to-r from-excellent-start h-2.5 rounded-full to-excellent-end w-[100%]"></div>
                            </div>
                        </div>
                        {/* Percussion 5/5 */}
                        <div className="relative">
                            <div className="dark:text-dark flex justify-between text-light">
                                <span>Percussion</span>
                                <span className="font-bold">100%</span>
                            </div>
                            <div className="bg-gray-200 dark:bg-gray-700 h-2.5 mt-1 rounded-full w-full">
                                <div className="bg-gradient-to-r from-excellent-start h-2.5 rounded-full to-excellent-end w-[100%]"></div>
                            </div>
                        </div>
                        {/* Chord Progression 4/4 */}
                        <div className="relative">
                            <div className="dark:text-dark flex justify-between text-light">
                                <span>Chord Progression</span>
                                <span className="font-bold">100%</span>
                            </div>
                            <div className="bg-gray-200 dark:bg-gray-700 h-2.5 mt-1 rounded-full w-full">
                                <div className="bg-gradient-to-r from-excellent-start h-2.5 rounded-full to-excellent-end w-[100%]"></div>
                            </div>
                        </div>
                        {/* Vocals 9/10 */}
                        <div className="relative">
                            <div className="dark:text-dark flex justify-between text-light">
                                <span>Vocals</span>
                                <span className="font-bold">90%</span>
                            </div>
                            <div className="bg-gray-200 dark:bg-gray-700 h-2.5 mt-1 rounded-full w-full">
                                <div className="bg-gradient-to-r from-great-start h-2.5 rounded-full to-great-end w-[90%]"></div>
                            </div>
                        </div>
                        {/* Bassline 2/5 */}
                        <div className="relative">
                            <div className="dark:text-dark flex justify-between text-light">
                                <span>Bassline</span>
                                <span className="font-bold">40%</span>
                            </div>
                            <div className="bg-gray-200 dark:bg-gray-700 h-2.5 mt-1 rounded-full w-full">
                                <div className="bg-gradient-to-r from-average-start h-2.5 rounded-full to-average-end w-[40%]"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dark:prose-invert max-w-none prose prose-lg">
                    <h3 className="dark:text-dark font-bold font-lora text-2xl text-light">
                        Commentary
                    </h3>
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
                </div>
            </div>
            <div className="mt-16 text-center">
                <p className="dark:text-gray-400 text-gray-500">
                    Overall Score
                </p>
                <p className="dark:text-dark font-bold font-display text-6xl text-light">
                    92.16%
                </p>
                <p className="dark:text-gray-300 mt-2 text-gray-600 text-lg">
                    Rank #2
                </p>
            </div>
        </>
    );
};

export default Home;
