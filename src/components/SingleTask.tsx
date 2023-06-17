import React, { useEffect, useRef, useState } from "react";
import "../styling/SingleTask.css"
import { Actions, Task } from "../model";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";

interface Props {
    task: Task;
    dispatch: React.Dispatch<Actions>;
}

const SingleTask: React.FC<Props> = ({ task, dispatch }) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTaskInput, setEditTaskInput] = useState<string>(task.task);

    const inputRef = useRef<HTMLInputElement>(null);

    const completeTask = (id: number) => {
        dispatch({ type: "complete", payload: id });
    };

    const deleteTask = (id: number) => {
        dispatch({ type: "remove", payload: id });
    };

    const editTask = (event: React.FormEvent, id: number) => {
        event.preventDefault();
        dispatch({ type: "edit", payload: { id, task: editTaskInput } });
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