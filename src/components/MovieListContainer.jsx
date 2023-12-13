import { useSelector } from "react-redux"
import CategoryContainer from "./CategoryContainer"
import usePopularMovies from "../hooks/usePopularMovies"
import useTopRatedMovies from "../hooks/useTopRatedMovies"
import useUpcomingMovies from "../hooks/useUpcomingMovies"


const MovieListContainer = () => {

    const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies)
    const popularMovies = useSelector(store => store.movies.popularMovies)
    const topRated = useSelector(store => store.movies.topRated)
    const upcomingMovies = useSelector(store => store.movies.upcomingMovies)

    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();
    return (
        <div className="bg-black bg-opacity-80 ">
            <CategoryContainer title={'Now Playing'} movies={nowPlayingMovies} />
            <CategoryContainer title={'Popular'} movies={popularMovies} />
            <CategoryContainer title={'Top Rated'} movies={topRated} />
            <CategoryContainer title={'Upcoming'} movies={upcomingMovies} />
        </div>
    )
}

export default MovieListContainer


// Now Playing - title
//     --- list of now playing movies
// Popular - title
//     ---- list of popular
// top rated - title
//     ---- list of top rated movies
// upcoming - title
//     ---- list of upcoming