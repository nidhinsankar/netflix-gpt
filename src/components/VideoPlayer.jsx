import { useState } from "react";
import { options } from "../utils/constants";
import { useSelector } from "react-redux";
import useVideosDetail from "../hooks/useVideosDetail";


const VideoPlayer = ({movieID}) => {

    const trailerVideo = useSelector(state => state?.movies?.mainMovieDetail)

    useVideosDetail(movieID)

    return (
        <iframe className="w-full aspect-video" src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1`}></iframe>
    )
}

export default VideoPlayer;