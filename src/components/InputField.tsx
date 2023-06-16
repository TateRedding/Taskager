import React from 'react'
import "../styling/InputField.css"

interface Props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField: React.FC<Props> = ({ todo, setTodo }) => {
    return (
        <form className="input">
            <input
                className="input-box"
                placeholder="Enter a Task"
                value={todo}
                onChange={(event) => setTodo(event.target.value)}
            />
            <button className="input-submit" type="submit">
                Go
            </button>
        </form>
    );
};

export default InputField