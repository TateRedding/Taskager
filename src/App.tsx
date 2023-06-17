import React, { useReducer, useState } from "react";
import "./styling/App.css"
import InputField from "./components/InputField";
import { Task, Actions } from "./model";
import TaskList from "./components/TaskList";

const App: React.FC = () => {
    const [id, setId] = useState<number>(1);
    const [taskInput, setTaskInput] = useState<string>("");

    const TaskReducer = (state: Task[], action: Actions) => {
        switch (action.type) {
            case "add":
                return [
                    ...state,
                    {
                        id,
                        task: action.payload,
                        isDone: false
                    }
                ];
            case "complete":
                return state.map(task => {
                    return task.id === action.payload ?
                        { ...task, isDone: !task.isDone } : task
                });
            case "edit":
                return state.map(task => {
                    return task.id === action.payload.id ?
                        { ...task, task: action.payload.task } : task
                });
            case "remove":
                return (state.filter(task => task.id !== action.payload));
            default:
                return state
        };
    };

    const [tasks, dispatch] = useReducer(TaskReducer, []);

    const addTask = (event: React.FormEvent) => {
        event.preventDefault();
        if (taskInput) {
            dispatch({ type: "add", payload: taskInput });
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
                dispatch={dispatch}
            />
        </div>
    );
};

export default App;