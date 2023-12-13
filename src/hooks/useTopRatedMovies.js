import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";


const useTopRatedMovies = () => {

    const dispatch = useDispatch()

    const fetchMovies = () => {
        fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  .then(response => response.json())
  .then(response => dispatch(addTopRatedMovies(response?.results)))
  .catch(err => console.error(err));
    }

    useEffect(()=>{
        fetchMovies()
    },[])
}

export default useTopRatedMovies