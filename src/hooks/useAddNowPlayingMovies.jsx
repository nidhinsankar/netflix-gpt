import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from '../utils/moviesSlice'
import { useEffect } from "react";

const useAddNowPlayingMovies = () => {
    const dispatch = useDispatch()

    const fetchMovies = () => {
        fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
        .then(response => response.json())
        .then(response => {
            dispatch(addNowPlayingMovies(response.results))
             }
        )
        .catch(err => console.error(err));
    }

    useEffect(()=>{
        fetchMovies()
    },[])
}

export default useAddNowPlayingMovies