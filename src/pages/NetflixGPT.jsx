import Header from "../components/Header";
import banner from '../assets/netflixbgcover.jpg'
import openai from "../utils/openai";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovieDetails } from "../utils/searchGptSlice";
import useFindMovies from "../hooks/useFindMovies";
import CategoryContainer from "../components/CategoryContainer";

const NetflixGPT = () =>{

    const searchRef = useRef()
    const dispatch = useDispatch()
    const suggestedMovies = useSelector(state => state.gpt)
    const  {moviesList,moviesNames} = suggestedMovies

    console.log(moviesList,moviesNames);
   

    const onSubmit = async() => {

        const gptQuery = "act as a movie recommendation system suggest me based on "+searchRef.current.value+"only five movies name in comma separated movies like given in examples ahead. example result: nayakan, master,amar akbar anthony, Anwar, puthiya mugam"
        const chatCompletion = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
        });

        if(!chatCompletion?.choices?.[0]){
            return
        }

        const movieResultGPT = chatCompletion.choices?.[0]?.message?.content.split(',')
        const result = movieResultGPT?.map(movie => useFindMovies(movie))
        const moviesList = await Promise.all(result)


        dispatch(addMovieDetails({moviesNames:movieResultGPT,moviesList}))
    }   

    return (
        <div className="">
            <img src={banner} alt="netflix-banner" className='fixed -z-20 h-screen w-full' />
            <Header />
            <div className="flex justify-center items-end">
                <input className="mt-[10%] focus:outline-none focus:ring-4 ring-net-red  font-medium text-lg py-2 px-3 shadow-md rounded-md" placeholder="Search....." type="text" name="searchGPT" id="search" ref={searchRef} />
                <button className="mt-[10%] py-2 ml-2 px-4 bg-net-red shadow-md rounded-md" onClick={()=>onSubmit()}>Search</button>
            </div>
            <div className="bg-black bg-opacity-90 w-[90%] md:w[70%] mx-auto mt-4">
                {moviesNames?.map((movies,id)=> (
                    <CategoryContainer key={moviesNames[id]} movies={moviesList[id]} title={moviesNames[id]} />
                ))}
            </div>
        </div>
    )
}
export default NetflixGPT;