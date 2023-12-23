import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../Hooks/AuthProvider'

const Navbar = () => {

    const { logOut, currentUser } = useContext(AuthContext)

    return (
        <div className="navbar bg-base-100 w-full">
            <div className="navbar-start">

                <a className="btn btn-ghost text-xl">TaskVault</a>
            </div>

            <div className="navbar-end">
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/dashboard'>Dashboard</NavLink></li>

                        {currentUser ?
                            <li><button onClick={() => logOut()} >Log Out</button></li> : <><li><NavLink to='/login'>Login</NavLink></li>
                                <li><NavLink to='/register'>Register</NavLink></li></>}


                    </ul>
                </div>
                {currentUser && <div className="avatar">
                    <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={currentUser.PhotoUrl} />
                    </div>
                </div>}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 right-0 z-[1] p-2 shadow bg-base-100 rounded-box">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/dashboard'>Dashboard</NavLink></li>

                        {currentUser ?
                            <li><button onClick={() => logOut()} >Log Out</button></li> : <><li><NavLink to='/login'>Login</NavLink></li>
                                <li><NavLink to='/register'>Register</NavLink></li></>}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar