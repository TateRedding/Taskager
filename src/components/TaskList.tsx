import React from "react";
import "../styling/TaskList.css";
import { Task } from "../model";
import SingleTask from "./SingleTask";
import { StrictModeDroppable } from "../StrictModeDroppable";

interface Props {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
    completedTasks: Task[];
    setCompletedTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

const TaskList: React.FC<Props> = ({ tasks, setTasks, completedTasks, setCompletedTasks }) => {
    return (
        <div className="tasks-container">
            <StrictModeDroppable droppableId="TaskList">
                {
                    (provided, snapshot) => (
                        <div
                            className={`tasks ${snapshot.isDraggingOver ? "drag-active" : null}`}
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            <span className="tasks-heading">Active Tasks</span>
                            {
                                tasks.map((task, index) => {
                                    return <SingleTask
                                        task={task}
                                        index={index}
                                        tasks={tasks}
                                        setTasks={setTasks}
                                        key={task.id}
                                    />
                                })
                            }
                            {provided.placeholder}
                        </div>
                    )
                }
            </StrictModeDroppable>
            <StrictModeDroppable droppableId="CompletedTaskList">
                {
                    (provided, snapshot) => (
                        <div
                            className={`tasks completed ${snapshot.isDraggingOver ? "drag-complete" : null}`}
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            <span className="tasks-heading">Completed Tasks</span>
                            {
                                completedTasks.map((task, index) => {
                                    return <SingleTask
                                        task={task}
                                        index={index}
                                        tasks={completedTasks}
                                        setTasks={setCompletedTasks}
                                        key={task.id}
                                    />
                                })
                            }
                            {provided.placeholder}
                        </div>
                    )
                }
            </StrictModeDroppable>
        </div>
    );
};

export default TaskList;