import React, { useRef } from "react";
import "../styling/InputField.css";

interface Props {
    addTask: (event: React.FormEvent) => void;
    taskInput: string;
    setTaskInput: React.Dispatch<React.SetStateAction<string>>;
}

const InputField: React.FC<Props> = ({ addTask, taskInput, setTaskInput }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form className="input" onSubmit={(event) => {
            addTask(event);
            inputRef.current?.blur();
        }}>
            <input
                ref={inputRef}
                className="input-box"
                placeholder="Enter a Task"
                value={taskInput}
                onChange={(event) => setTaskInput(event.target.value)}
            />
            <button className="input-submit" type="submit">
                Go
            </button>
        </form>
    );
};

export default InputField