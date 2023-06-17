import React, { useState } from "react";
import "./styling/App.css"
import InputField from "./components/InputField";
import { Task } from "./model";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import TaskList from "./components/TaskList";

const App: React.FC = () => {
    const [id, setId] = useState<number>(1);
    const [taskInput, setTaskInput] = useState<string>("");

    const [tasks, setTasks] = useState<Task[]>([]);
    const [completedTasks, setCompletedTasks] = useState<Task[]>([]);

    const addTask = (event: React.FormEvent) => {
        event.preventDefault();
        if (taskInput) {
            setTasks([...tasks, {
                id,
                task: taskInput,
                isDone: false
            }])
            setId(id + 1);
            setTaskInput("");
        };
    };

    const onDragEnd = (result: DropResult) => {
        const { source, destination } = result;

        if (!destination) {
            return;
        };

        if (destination.droppableId === source.droppableId &&
            destination.index === source.index) {
            return;
        };

        let add: Task,
            active = tasks,
            complete = completedTasks;

        if (source.droppableId === "TaskList") {
            add = active[source.index];
            active.splice(source.index, 1);
        } else {
            add = complete[source.index];
            complete.splice(source.index, 1);
        };

        if (destination.droppableId === "TaskList") {
            active.splice(destination.index, 0, add);
        } else {
            complete.splice(destination.index, 0, add);
        };

        setTasks(active);
        setCompletedTasks(complete);
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="App">
                <span className="heading">Taskager</span>
                <InputField
                    addTask={addTask}
                    taskInput={taskInput}
                    setTaskInput={setTaskInput}
                />
                <TaskList
                    tasks={tasks}
                    setTasks={setTasks}
                    completedTasks={completedTasks}
                    setCompletedTasks={setCompletedTasks}
                />
            </div>
        </DragDropContext>
    );
};

export default App;