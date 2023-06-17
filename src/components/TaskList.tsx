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
        <div className="tasks">
            {
                tasks.map(task => (
                    <SingleTask
                        task={task}
                        tasks={tasks}
                        dispatch={dispatch}
                        key={task.id}
                    />
                ))
            }
        </div>
    );
};

export default TaskList