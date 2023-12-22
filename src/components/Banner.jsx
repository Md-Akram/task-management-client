import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (


        < section
            className="relative bg-[url(https://images.unsplash.com/photo-1603468620905-8de7d86b781e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3Rpdml0eXxlbnwwfHwwfHx8MA%3D%3D)] bg-cover bg-center bg-no-repeat"
        >
            <div
                className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 sm:bg-gradient-to-r"
            ></div>

            <div
                className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
            >
                <div className="max-w-xl text-center sm:text-left">
                    <h1 className="text-3xl font-extrabold sm:text-5xl">
                        Streamline Your Productivity
                    </h1>

                    <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                        Your Personal Task Management Headquarters
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4 text-center">
                        <Link
                            to='dashboard'
                            className="block w-full rounded bg-violet-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-violet-700 focus:outline-none focus:ring active:bg-violet-500 sm:w-auto"
                        >
                            Lets Explore
                        </Link>


                    </div>
                </div>
            </div>
        </section >
    )
}

export default Banner