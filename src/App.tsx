import React, { useEffect, useId, useState } from "react";
import "./styling/App.css"
import InputField from "./components/InputField";
import { Task } from "./model";
import TaskList from "./components/TaskList";

const App: React.FC = () => {
    const [id, setId] = useState<number>(1);
    const [taskInput, setTaskInput] = useState<string>("");
    const [tasks, setTasks] = useState<Task[]>([]);

    const addTask = (event: React.FormEvent) => {
        event.preventDefault();
        if (taskInput) {
            setTasks([...tasks, {
                id,
                task: taskInput,
                isDone: false
            }]);
            setId(id + 1);
            setTaskInput("");
        };
    };

    return (
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
            />
        </div>
    );
};

export default App;