import React from 'react'

const WhomSection = () => {
    return (
        <section className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    Whom this application for
                </h2>

                <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
                    <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                            <div>
                                <p className="mt-0.5 text-lg font-medium text-gray-900">Solo Professionals</p>
                            </div>
                        </div>

                        <p className="mt-4 text-gray-700">
                            Whether you're an independent freelancer, consultant, or entrepreneur, our task management app is designed to cater to your unique needs. Stay organized, meet deadlines, and achieve your professional goals efficiently.
                        </p>
                    </blockquote>

                    <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                            <div>
                                <p className="mt-0.5 text-lg font-medium text-gray-900">Students and Learners</p>
                            </div>
                        </div>

                        <p className="mt-4 text-gray-700">
                            For students and lifelong learners, our app provides a dedicated space to manage coursework, assignments, and personal projects. Elevate your learning experience and make the most of your academic journey.
                        </p>
                    </blockquote>

                    <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                            <div>
                                <p className="mt-0.5 text-lg font-medium text-gray-900">Busy Parents and Home Managers</p>
                            </div>
                        </div>

                        <p className="mt-4 text-gray-700">
                            Balancing work, family, and home responsibilities is no small feat. Our task management tool is here to assist busy parents and home managers in staying on top of daily tasks, appointments, and family activities. Simplify your life with organized efficiency.
                        </p>
                    </blockquote>
                </div>
            </div>
        </section>
    )
}

export default WhomSection