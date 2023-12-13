import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";


const usePopularMovies = () => {

    const dispatch = useDispatch()

    const fetchMovies = () => {
        fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
        .then(response => response.json())
        .then(response => dispatch(addPopularMovies(response?.results)))
        .catch(err => console.error(err));
    }

    useEffect(()=>{
        fetchMovies()
    },[])
}

export default usePopularMovies;