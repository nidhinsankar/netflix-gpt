import { useSelector } from "react-redux";
import VideoPlayer from "./VideoPlayer";


const VideoContainer = () => {

    const moviesList = useSelector(store => store?.movies?.nowPlayingMovies)

    if(!moviesList) return
    // console.log('moviesList',moviesList);
    const mainMovie = moviesList?.[0]

    

    return (
        <div className="w-full">
            <VideoPlayer movieID={mainMovie?.id} />
            <div className="md:w-1/2 lg:w-1/4 px-6 text-white absolute top-2 pt-[25%] bg-gradient-to-r from-black h-full bg-opacity-5 ">
                <h3 className="font-extrabold text-2xl leading-5 ">{mainMovie?.title}</h3>
                <p className="mt-6 leading-7">{mainMovie?.overview}</p>
                <button className="py-2  px-4 mt-4 bg-white hover:bg-opacity-70 text-black w-24">Play</button>
                <button className="py-2 mx-3 px-4 bg-gray-400 w-24">Info</button>
            </div>
        </div>
    )
}

export default VideoContainer;