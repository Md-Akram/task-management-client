import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        < div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8" >
            <div className="mx-auto max-w-lg">
                <h1 className="text-center text-2xl font-bold text-violet-600 sm:text-3xl">Register</h1>

                <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
                    Welcome to our secure registration portal. Unlock the door to personalized productivity and task management. Register to access your dedicated workspace, where you can seamlessly organize, prioritize, and accomplish your tasks.
                </p>

                <form action="" className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
                    <p className="text-center text-lg font-medium">Register your account</p>

                    <div>
                        <label htmlFor="email" className="sr-only">Email</label>

                        <div className="relative">
                            <input
                                type="email"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter email"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="sr-only">Password</label>

                        <div className="relative">
                            <input
                                type="password"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter password"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="block w-full rounded-lg bg-violet-600 px-5 py-3 text-sm font-medium text-white"
                    >
                        Register
                    </button>

                    <p className="text-center text-sm text-gray-500">
                        Already have an account?
                        <Link className="underline" to='/login' replace>Login</Link>
                    </p>
                </form>
            </div>
        </div >
    )
}

export default Register