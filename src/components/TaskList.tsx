import React from "react";
import "../styling/TaskList.css";
import { Task } from "../model";
import SingleTask from "./SingleTask";

interface Props {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

const TaskList: React.FC<Props> = ({ tasks, setTasks }) => {
    return (
        <div className="tasks">
            {
                tasks.map(task => (
                    <SingleTask
                        task={task}
                        tasks={tasks}
                        setTasks={setTasks}
                        key={task.id}
                    />
                ))
            }
        </div>
    );
};

export default TaskList