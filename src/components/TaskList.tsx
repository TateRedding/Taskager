import React from "react";
import "../styling/TaskList.css";
import { Actions, Task } from "../model";
import SingleTask from "./SingleTask";

interface Props {
    tasks: Task[];
    dispatch: React.Dispatch<Actions>;
};

const TaskList: React.FC<Props> = ({ tasks, dispatch }) => {
    return (
        <div className="tasks-container">
            <div className="tasks">
                <span className="tasks-heading">Active Tasks</span>
                {
                    tasks.map(task => {
                        return <SingleTask
                            task={task}
                            dispatch={dispatch}
                            key={task.id}
                        />
                    })
                }
            </div>
            <div className="tasks completed">
            <span className="tasks-heading">Completed Tasks</span>
                {
                    tasks.map(task => {
                        return <SingleTask
                            task={task}
                            dispatch={dispatch}
                            key={task.id}
                        />
                    })
                }
            </div>
        </div>
    );
};

export default TaskList