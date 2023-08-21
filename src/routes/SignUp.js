import React, { useState } from 'react';
import { AiFillLock, AiOutlineMail } from 'react-icons/ai';
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';


const SignUp = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [modal, setModal] = useState(false);
    const { signUp } = UserAuth()
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try {
            await signUp(email, password)
            setModal(true)

        } catch (error) {
            setError(error.message)
            console.log(error.message)
        }

    }

    const handleContinue = (e) => {
        e.preventDefault()
        setModal(false)
        navigate('/account')
    }

    return (
        <div>
            {modal ? (<div className='border border-black-300 flex flex-col justify-center max-w-[300px] mx-auto min-h-[250px] rounded-div px-4 my-14'>
                <div className='flex flex-col items-center'>
                    <BsFillCheckCircleFill className='animate-pulse my-4' size={40} />
                    <p className='text-xl'>Sign Up successful</p>
                    <button className='w-[50%] my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl' onClick={handleContinue}>Continue</button>
                </div>
            </div>) : <div>
                <div className='max-w-[400px] mx-auto min-h-[600px] px-4 py-20'>
                    <h1 className='text-2xl font-bold'>Sign Up</h1>
                    {error ? <p className='bg-red-300 p-3 my-2'>{error}</p> : null}
                    <form onSubmit={handleSubmit}>
                        <div className='my-4'>
                            <label>Email</label>
                            <div className='my-2 w-full relative rounded-2xl shadow-xl'>
                                <input
                                    onChange={(e) => { setEmail(e.target.value) }}
                                    value={email}
                                    className='w-full p-2 bg-primary border border-input rounded-2xl' type='email' />
                                <AiOutlineMail className='absolute right-2 top-3 text-gray-400' />
                            </div>
                        </div>
                        <div className='my-4'>
                            <label>Password</label>
                            <div className='my-2 w-full relative rounded-2xl shadow-xl'>
                                <input
                                    value={password}
                                    onChange={(e) => { setPassword(e.target.value) }}
                                    className='w-full p-2 bg-primary border border-input rounded-2xl' type='password' />
                                <AiFillLock className='absolute right-2 top-3 text-gray-400' />
                            </div>
                        </div>
                        <button className='w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl'>Sign Up</button>
                    </form>
                    <p className='my-4'>Already have an account?<Link to='/signin' className='text-accent'> Sign In</Link></p>
                </div>
            </div>}

        </div>
    );
}

export default SignUp;
