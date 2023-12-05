import { useState } from 'react'
import banner from '../assets/netflixbgcover.jpg'

const Login = () => {

    const [isSignUpForm,setIsSignUpForm] = useState(false)

    return (
        <div className="relative h-screen w-full flex justify-center items-center bg-black bg-opacity-30">
            <img src={banner} alt="netflix-banner" className='absolute -z-20 h-screen w-full' />
            <div className='mt-5 md:w-[60%] lg:w-[25%] bg-black bg-opacity-70 rounded-md'>
                <div className='w-[90%] flex flex-col mx-auto gap-y-3 py-16 md:py-20'>
                    <h3 className='font-bold text-4xl leading-5 text-white'>{isSignUpForm ? 'Sign Up':'Sign In'}</h3> 
                    {isSignUpForm && <input type="text" name="name" id="name" placeholder='Name' className='h-14 px-4 py-1 bg-gray-600 text-gray-400 text-xl rounded-md font-bold my-2' />}
                    <input type="email" name="email" id="email" placeholder='Email or Phone number' className='h-14 px-4 py-1 bg-gray-600 text-gray-400 text-xl rounded-md font-bold my-2' />
                    <input type='password' name='password' id='password' placeholder='Password' className='h-14 px-4 py-1 bg-gray-600 text-gray-400 text-xl font-bold rounded-md my-3' />
                    <button className='bg-net-red text-white h-14 my-3 rounded-md'>{isSignUpForm ? 'Sign Up':'Sign In'}</button>
                    {isSignUpForm ? <p className='text-center text-gray-400'>Already registered ? <span onClick={()=>setIsSignUpForm(!isSignUpForm)} className='hover:cursor-pointer hover:text-gray-500 hover:border-b'>Sign in now</span></p> : <p className='text-center text-gray-400'>New to netflix ? <span onClick={()=>setIsSignUpForm(!isSignUpForm)} className='hover:cursor-pointer hover:text-gray-500 hover:border-b'>Sign up now</span></p>}
                    
                </div>
            </div>            
        </div>
    )
}

export default Login