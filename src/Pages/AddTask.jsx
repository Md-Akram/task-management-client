import React, { useContext } from 'react'
import { useForm } from "react-hook-form"
import { AuthContext } from '../Hooks/AuthProvider'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const AddTask = () => {

    const { register, handleSubmit, reset } = useForm()

    const { currentUser } = useContext(AuthContext)

    const navigate = useNavigate()

    const handleClick = (task) => {
        const newTodo = {
            taskId: crypto.randomUUID(),
            ...task
        }

        fetch(`https://task-management-server-theta-rosy.vercel.app/addTask/${currentUser.email}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newTodo),
        }).then(response => {
            return response.json()
        }).then(result => {
            console.log(result)
            reset()

            toast.success('task added')
            navigate('/dashboard')
        }).catch(error => {
            console.error('Error:', error.message);
            toast.error(error.message)
        })

    }

    return (
        <div className="form">
            < div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8" >
                <div className="mx-auto max-w-lg">
                    <h1 className="text-center text-2xl font-bold text-violet-600 sm:text-3xl">
                        Add task
                    </h1>
                    <form
                        onSubmit={handleSubmit(handleClick)}
                        className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
                    >
                        <div>
                            <label htmlFor="title" className="sr-only">Title</label>

                            <div className="relative">
                                <input
                                    {...register("title")}
                                    required
                                    type="text"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter title"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="description" className="sr-only">Description</label>

                            <div className="relative">
                                <input
                                    required
                                    {...register("description")}
                                    type="text"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter description"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="deadline" className="sr-only">Deadline</label>

                            <div className="relative">
                                <input
                                    required
                                    {...register("deadline")}
                                    type="date"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter deadline"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="priority" className="sr-only">Description</label>

                            <div className="relative">
                                <select
                                    id="priority" {...register("priority")}
                                    required

                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter Priority">
                                    <option value="high">High</option>
                                    <option value="moderate">Moderate</option>
                                    <option value="low">Low</option>
                                </select>
                            </div>



                        </div>

                        <button
                            type="submit"
                            className="block w-full rounded-lg bg-violet-600 px-5 py-3 text-sm font-medium text-white"
                        >
                            Add task
                        </button>
                    </form>
                </div>
            </div >
        </div>
    )
}

export default AddTask