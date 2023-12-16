import Header from "../components/Header";
import banner from '../assets/netflixbgcover.jpg'

const NetflixGPT = () =>{

    return (
        <div className="">
            <img src={banner} alt="netflix-banner" className='absolute -z-20 h-screen w-full' />
            <Header />
            <div className="flex justify-center items-end">
                <input className="mt-[10%] focus:outline-none focus:ring-4 ring-net-red  font-medium text-lg py-2 px-3 shadow-md rounded-md" placeholder="Search....." type="text" name="searchGPT" id="search" />
                <button className="mt-[10%] py-2 ml-2 px-4 bg-net-red shadow-md rounded-md">Search</button>
            </div>
        </div>
    )
}
export default NetflixGPT;