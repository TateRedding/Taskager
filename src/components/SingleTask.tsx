import React from "react";
import "../styling/SingleTask.css"
import { Task } from "../model";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";

interface Props {
    task: Task;
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const SingleTask: React.FC<Props> = ({ task, tasks, setTasks }) => {
    return (
        <form className="single-task">
            <span className="single-task-text">{task.task}</span>
            <div>
                <span className="icon">
                    <AiFillEdit />
                </span>
                <span className="icon">
                    <AiFillDelete />
                </span>
                <span className="icon">
                    <MdDone />
                </span>
            </div>
        </form>
    );
};

export default SingleTask