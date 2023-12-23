import { IMG_CDN } from "../utils/constants";


const CategoryContainer = ({title,movies}) => {

    return (
        <div className="p-6">
            <h2 className="py-3 text-white font-bold text-2xl">{title}</h2>
            <div className="flex overflow-x-auto">
                <div className="flex">
                    {movies?.map(movie => (
                        <MovieCard movie={movie} key={movie?.id} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CategoryContainer;

    
const MovieCard = ({movie}) => {

    if(!movie?.poster_path) return

    return (
        <div className="mx-1 w-56  hover:scale-110 transition-all">
            <img className="" src={IMG_CDN + movie?.poster_path} alt={movie?.title} />
        </div>
    )
}