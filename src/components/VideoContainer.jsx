import { useSelector } from "react-redux";
import VideoPlayer from "./VideoPlayer";

const VideoContainer = () => {
  const moviesList = useSelector((store) => store?.movies?.nowPlayingMovies);

  if (!moviesList) return;
  // console.log('moviesList',moviesList);
  const mainMovie = moviesList?.[0];

  return (
    <div className="w-full h-[320px] md:h-[650px] bg-red-500 bg-gradient-to-r from-black bg-opacity-5 ">
      <VideoPlayer movieID={mainMovie?.id} />
      <div className="md:w-1/2 lg:w-1/4 px-6 text-white absolute top-2 pt-[45%] sm:pt-[50%] md:pt-[15%] ">
        <h3 className="font-extrabold text-lg md:text-2xl leading-5 ">
          {mainMovie?.title}
        </h3>
        <p className="hidden md:block mt-6 leading-7">{mainMovie?.overview}</p>
        <button className="py-2  px-4 mt-4 bg-white hover:bg-opacity-70 text-black w-24 rounded-lg">
          Play
        </button>
        <button className="py-2 mx-3 px-4 bg-gray-400 w-24 rounded-lg">
          Info
        </button>
      </div>
    </div>
  );
};

export default VideoContainer;
