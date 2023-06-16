import React, { useState } from "react";
import "./styling/App.css"
import InputField from "./components/InputField";

const App: React.FC = () => {
    const [todo, setTodo] = useState<string>("");

    return (
        <div className="App">
            <span className="heading">Taskager</span>
            <InputField
                todo={todo}
                setTodo={setTodo}
            />
        </div>
    );
};

export default App;