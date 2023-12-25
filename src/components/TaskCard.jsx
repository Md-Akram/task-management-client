
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../Hooks/constants';

const TaskCard = ({ task, handleDelete }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.TASK,
        item: { task }, // Pass the task data as the item
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));
    return (
        <article
            ref={drag}
            className={`rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6 w-11/12 mx-auto mb-2 ${isDragging ? 'opacity-50' : '' // Reduce opacity when dragging
                }`}
        >

            <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                {task.title}
            </h3>


            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                {task.description}
            </p>

            <div className="flex flex-row items-center justify-between">
                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    Deadline: {task.deadline}
                </p>
                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    Priority: {task.priority}
                </p>
            </div>

            <button onClick={() => handleDelete(task.taskId)} className="mt-2 px-4 py-2 border  ">
                delete
            </button>


        </article >
    )
}

export default TaskCard