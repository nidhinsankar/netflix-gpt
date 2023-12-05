import banner from '../assets/netflixbgcover.jpg'

const Login = () => {

    return (
        <div className="relative h-screen w-full flex justify-center items-center bg-black bg-opacity-60">
            <img src={banner} alt="netflix-banner" className='absolute -z-20 h-screen w-full' />
            <div className='w-[30%] bg-black bg-opacity-50 h-72'>
                <div className='w-[70%] flex flex-col mx-auto h-full justify-center'>
                    <input type="email" name="email" id="email" className='h-10 my-3 px-4 py-2' />
                    <input type='password' name='password' id='password' className='h-10 my-3 px-4 py-2' />
                        <button className='bg-net-red text-white h-10 mt-3'>Sign In</button>
                </div>
            </div>            
        </div>
    )
}

export default Login