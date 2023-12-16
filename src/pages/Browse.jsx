import { useSelector } from "react-redux";
import Header from "../components/Header";
import MovieListContainer from "../components/MovieListContainer";
import VideoContainer from "../components/VideoContainer";
import useAddNowPlayingMovies from "../hooks/useAddNowPlayingMovies";
import NetflixGPT from "./NetflixGPT";


// first container
//   - video background
//   -  details about movie
//  second container
//   - moviesList * n
//      - movie card * n 
const Browse = () => {
    const gptPage = useSelector(store => store?.gpt.gptPage)

    useAddNowPlayingMovies()

    return (
        <div className="min-h-screen">
            <Header />
            {gptPage ? (
                <NetflixGPT />
            ):(
                <>
                <VideoContainer />
                <MovieListContainer />
                </>
            )}
        </div>
    )
}


export default Browse;