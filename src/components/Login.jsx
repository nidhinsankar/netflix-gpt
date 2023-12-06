import { useRef, useState } from 'react'
import banner from '../assets/netflixbgcover.jpg'
import { validate } from '../utils/validateForm'
import { auth } from '../utils/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'

const Login = () => {

    const [isSignUpForm,setIsSignUpForm] = useState(false)
    const [errorMessage,setErrorMessage] = useState(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const name = useRef('')
    const email = useRef(null)
    const password = useRef(null)

    const onFormSubmit = () => {
        const errorMessage = validate(name.current?.value,email.current.value,password.current.value)
        setErrorMessage(errorMessage)

        if(errorMessage) return null;

        if (isSignUpForm) {
            createUserWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                updateProfile(auth.currentUser, {
                    displayName: name?.current?.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
                  }).then(() => {
                    const { uid,email,displayName,photoURL} = auth.currentUser
                    dispatch(addUser({uid,email,displayName,photoURL}))
                    navigate('/browse')
                  }).catch((error) => {
                    setErrorMessage(error?.errorMessage)
                  });
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorMessage)
                // ..
            });
        } else {
            signInWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                navigate('/browse')

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorMessage)
            });
        }
    }

    const toggleSignUpForm = () => {
        setIsSignUpForm(!isSignUpForm)
    }

    return (
        <div className="relative h-screen w-full flex justify-center items-center bg-black bg-opacity-30">
            <img src={banner} alt="netflix-banner" className='absolute -z-20 h-screen w-full' />
            <div className='mt-5 md:w-[60%] lg:w-[25%] bg-black bg-opacity-70 rounded-md'>
                <form onSubmit={e => e.preventDefault()} className='w-[90%] flex flex-col mx-auto gap-y-3 py-16 md:py-20'>
                    <h3 className='font-bold text-4xl leading-5 text-white'>{isSignUpForm ? 'Sign Up':'Sign In'}</h3> 
                    {isSignUpForm && <input ref={name} type="text" name="name" id="name" placeholder='Name' className='h-14 px-4 py-1 bg-gray-600 text-gray-400 text-xl rounded-md font-bold my-2' />}
                    <input type="email" ref={email} name="email" id="email" placeholder='Email or Phone number' className='h-14 px-4 py-1 bg-gray-600 text-gray-400 text-xl rounded-md font-bold my-2' />
                    <input type='password' ref={password} name='password' id='password' placeholder='Password' className='h-14 px-4 py-1 bg-gray-600 text-gray-400 text-xl font-bold rounded-md my-3' />
                    <p className='text-red-500 font-medium text-xl leading-4'>{errorMessage}</p>
                    <button className='bg-net-red text-white h-14 my-3 rounded-md' onClick={onFormSubmit}>{isSignUpForm ? 'Sign Up':'Sign In'}</button>
                    {isSignUpForm ? (
                        <p className='text-center text-gray-400'>Already registered ? <span onClick={()=>toggleSignUpForm()} className='hover:cursor-pointer hover:text-gray-500 hover:border-b'>Sign in now</span></p>) 
                    :
                        (<p className='text-center text-gray-400'>New to netflix ? <span onClick={()=>toggleSignUpForm()} className='hover:cursor-pointer hover:text-gray-500 hover:border-b'>Sign up now</span></p>)}
                    
                </form>
            </div>            
        </div>
    )
}

export default Login