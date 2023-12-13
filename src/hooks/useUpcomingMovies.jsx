import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";


const useUpcomingMovies = () => {

    const dispatch = useDispatch()

    const fetchMovies = () => {
        fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
  .then(response => response.json())
  .then(response => dispatch(addUpcomingMovies(response.results)))
  .catch(err => console.error(err));
    }

    useEffect(()=>{
        fetchMovies()
    },[])
}

export default useUpcomingMovies