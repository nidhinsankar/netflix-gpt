import Header from "../components/Header";
import MovieListContainer from "../components/MovieListContainer";
import VideoContainer from "../components/VideoContainer";
import useAddNowPlayingMovies from "../hooks/useAddNowPlayingMovies";


// first container
//   - video background
//   -  details about movie
//  second container
//   - moviesList * n
//      - movie card * n 
const Browse = () => {

    useAddNowPlayingMovies()

    return (
        <div className="min-h-screen">
            <Header />
            <VideoContainer />
            <MovieListContainer />
        </div>
    )
}


export default Browse;