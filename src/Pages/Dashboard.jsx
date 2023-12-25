import React, { useContext, useEffect, useState } from 'react';
import TaskCard from '../components/TaskCard';
import { AuthContext } from '../Hooks/AuthProvider';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../Hooks/constants';
import Loading from '../components/Loading';
import { data } from 'autoprefixer';
import toast from 'react-hot-toast';

const Dashboard = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [todo, setTodo] = useState([]);
    const [ongoing, setOngoing] = useState([]);
    const [completed, setCompleted] = useState([]);

    const { currentUser } = useContext(AuthContext);

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (todo.length > 0 || ongoing.length > 0 || completed.length > 0) {
            updateData();
        }
    }, [todo, ongoing, completed]);

    const fetchData = () => {
        setLoading(true);
        fetch(`https://task-management-server-theta-rosy.vercel.app/users/${currentUser.email}`)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    console.error('Error fetching user data:', response);
                    throw new Error('Error fetching user data');
                }
            })
            .then((data) => {
                console.log(data.tasks);
                setUserData(data);
                setTodo(data.tasks.todo);
                setOngoing(data.tasks.ongoing);
                setCompleted(data.tasks.completed);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching user data:', error);
            })
    };




    const handleDrop = (item, targetList) => {
        const droppedTask = item.task;

        // Update the state based on the target list
        switch (targetList) {
            case 'todo':
                todoFunction(droppedTask)
                console.log("todo", todo, 'ongoing', ongoing, 'completed', completed);
                break;
            case 'ongoing':
                ongoingFunction(droppedTask)
                console.log("todo", todo, 'ongoing', ongoing, 'completed', completed);

                break;
            case 'completed':
                completedFunction(droppedTask)
                console.log("todo", todo, 'ongoing', ongoing, 'completed', completed);

                break;
            default:
                break;
        }
    };

    const todoFunction = (givenTask) => {
        setTodo((prevTodo) => {
            const uniqueTodo = prevTodo.filter((task) => task.taskId !== givenTask.taskId);
            return [...uniqueTodo, givenTask];
        });
        setOngoing((prevOngoing) => prevOngoing.filter((task) => task.taskId !== givenTask.taskId));
        setCompleted((prevCompleted) => prevCompleted.filter((task) => task.taskId !== givenTask.taskId));
        toast.success('task added in to-do')
    }

    const ongoingFunction = (givenTask) => {
        setOngoing((prevOngoing) => {
            const uniqueOngoing = prevOngoing.filter((task) => task.taskId !== givenTask.taskId);
            return [...uniqueOngoing, givenTask];
        });
        setTodo((prevTodo) => prevTodo.filter((task) => task.taskId !== givenTask.taskId));
        setCompleted((prevCompleted) => prevCompleted.filter((task) => task.taskId !== givenTask.taskId));
        toast.success('task added in ongoing')
    }

    const completedFunction = (givenTask) => {
        setCompleted((prevCompleted) => {
            const uniqueCompleted = prevCompleted.filter((task) => task.taskId !== givenTask.taskId);
            return [...uniqueCompleted, givenTask];
        });
        setTodo((prevTodo) => prevTodo.filter((task) => task.taskId !== givenTask.taskId));
        setOngoing((prevOngoing) => prevOngoing.filter((task) => task.taskId !== givenTask.taskId));
        toast.success('task added in completed')

    }

    const [, dropTodo] = useDrop(() => ({
        accept: ItemTypes.TASK,
        drop: (item) => handleDrop(item, 'todo'),
    }));

    const [, dropOngoing] = useDrop(() => ({
        accept: ItemTypes.TASK,
        drop: (item) => handleDrop(item, 'ongoing'),
    }));

    const [, dropCompleted] = useDrop(() => ({
        accept: ItemTypes.TASK,
        drop: (item) => handleDrop(item, 'completed'),
    }));



    const updateData = () => {
        const updatedTasks = {
            todo,
            ongoing,
            completed,
        };
        console.log('from updated data', updatedTasks);
        fetch(`https://task-management-server-theta-rosy.vercel.app/users/tasks/${currentUser.email}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedTasks),
        }).then(response => {
            console.log(response);
        }).catch(error => {
            console.error('Error updating tasks:', error);
        })

    };



    const handleDelete = (id) => {
        console.log(id);
        setTodo((prevTodo) => prevTodo.filter((task) => task.taskId !== id));
        setOngoing((prevOngoing) => prevOngoing.filter((task) => task.taskId !== id));
        setCompleted((prevCompleted) => prevCompleted.filter((task) => task.taskId !== id));

        updateData()
    }


    if (loading) {
        return <Loading />;
    }

    return (
        <div>
            <div className="tasks w-11/12 mx-auto">
                <h2 className="text-3xl font-bold sm:text-4xl text-center my-4">Tasks</h2>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
                    <div className="rounded-lg bg-gray-200" ref={dropTodo}>
                        <h1 className="text-xl text-center font-bold sm:text-2xl my-2">To Do</h1>
                        <div className="self">
                            {todo?.map((task) => (
                                <TaskCard key={task.taskId} task={task} handleDelete={handleDelete} />
                            ))}
                        </div>
                        <div></div>
                    </div>
                    <div className="rounded-lg bg-gray-200" ref={dropOngoing}>
                        <h1 className="text-xl text-center font-bold sm:text-2xl my-2">On going</h1>
                        <div className="self">
                            {ongoing?.map((task) => (
                                <TaskCard key={task.taskId} task={task} handleDelete={handleDelete} />
                            ))}
                        </div>
                        <div></div>
                    </div>
                    <div className="rounded-lg bg-gray-200" ref={dropCompleted}>
                        <h1 className="text-xl text-center font-bold sm:text-2xl my-2">Completed</h1>
                        <div className="self">
                            {completed?.map((task) => (
                                <TaskCard key={task.taskId} task={task} handleDelete={handleDelete} />
                            ))}
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
