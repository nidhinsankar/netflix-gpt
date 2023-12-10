import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addMainVideoDetail } from "../utils/moviesSlice";
import { useEffect } from "react";


const useVideosDetail = (id) => {

    const dispatch = useDispatch()

    const fetchData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
        .then(response => response.json())
        .then(response => {
            const findVideo = response?.results?.find(item => item?.type === 'Trailer')
            console.log('findvideo =>',findVideo);
            dispatch(addMainVideoDetail(findVideo))
        })
        .catch(err => console.error(err));
    } 

    useEffect(()=>{
        fetchData()        
    },[id])

}

export default useVideosDetail