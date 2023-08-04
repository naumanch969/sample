import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/actions/user'

const Login = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { isFetching, error } = useSelector(state => state.user)

    const [userData, setUserData] = useState({ email: '', password: '' })

    const handleLogin = () => {
        dispatch(login(userData, navigate))
    }
    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }



    return (
        <div style={{ minHeight: 'calc(100vh - 56px)' }} className=' flex flex-col items-center justify-center text-dark-text  ' >


            <div className="w-[37%] flex flex-col items-center gap-[10px] bg-dark-light-main py-[20px] px-[50px] border-[1px] border-dark-soft rounded-[4px] ">

                <h1 className='text-[24px] ' >Sign In</h1>
                <h2 className='text-[20px] font-light ' >to continure this app</h2>

                <input type="text" value={userData.email} name='email' onChange={handleChange} placeholder='username' className='border-[1px] border-dark-soft w-full outline-none rounded-[3px] p-[10px] bg-transparent ' />
                <input type="password" value={userData.password} name='password' onChange={handleChange} placeholder='password' className='border-[1px] border-dark-soft w-full outline-none rounded-[3px] p-[10px] bg-transparent ' />
                <button onClick={handleLogin} className='rounded-[3px] border-none py-[10px] px-[20px] font-medium cursor-pointer bg-dark-soft text-dark-soft-text ' >
                    {isFetching ? 'Loading...' : 'Sign in'}
                </button>
                {error && <span className="text-[14px] text-red-500 text-center w-full ">{error}</span>}

                <span className='text-dark-soft-text text-[12px] flex justify-center gap-[8px] ' ><span>Don't have account?</span> <Link to='/auth/register' className='text-white ' >Register here</Link></span>

            </div>

        </div>
    )
}

export default Login