import { options } from "../utils/constants";


const useFindMovies = async(movie) => {
    try {
        const res = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', options)
        const response = await res.json();
        return response?.results
    } catch (error) {   
        console.log(error);
    }

}

export default useFindMovies;