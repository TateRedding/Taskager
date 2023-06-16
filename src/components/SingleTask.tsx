import React, { useEffect, useRef, useState } from "react";
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
    const [edit, setEdit] = useState<boolean>(false);
    const [editTaskInput, setEditTaskInput] = useState<string>(task.task);

    const inputRef = useRef<HTMLInputElement>(null);

    const completeTask = (id: number) => {
        setTasks(tasks.map(task => {
            return task.id === id ?
                { ...task, isDone: !task.isDone }
                :
                task
        }));
    };

    const deleteTask = (id: number) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const editTask = (event: React.FormEvent, id: number) => {
        event.preventDefault();
        setTasks(tasks.map(task => {
            return task.id === id ?
                { ...task, task: editTaskInput }
                :
                task
        }));
        setEdit(false);
    };

    useEffect(() => {
        inputRef.current?.focus();
    }, [edit]);

    return (
        <form className="single-task" onSubmit={(event) => editTask(event, task.id)}>
            {
                edit ?
                    <input
                        ref={inputRef}
                        className="single-task-text"
                        value={editTaskInput}
                        onChange={(event) => setEditTaskInput(event.target.value)}
                    />
                    :
                    task.isDone ?
                        <s className="single-task-text">{task.task}</s>
                        :
                        <span className="single-task-text">{task.task}</span>
            }

            <div>
                <span className="icon" onClick={() => {
                    if (!edit && !task.isDone) {
                        setEdit(!edit);
                    };
                }}>
                    <AiFillEdit />
                </span>
                <span className="icon" onClick={() => deleteTask(task.id)}>
                    <AiFillDelete />
                </span>
                <span className="icon" onClick={() => completeTask(task.id)}>
                    <MdDone />
                </span>
            </div>
        </form>
    );
};

export default SingleTask