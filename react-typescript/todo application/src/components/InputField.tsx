import React, { useRef } from 'react';
import './styles.css'

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {

    const inputRef = useRef<HTMLInputElement>(null);
    return (

        <form
            className="input"
            onSubmit={(e) => {
                handleAdd(e)
                inputRef.current?.blur()
            }}

        >
            <input
                ref={inputRef}
                type="text"
                placeholder="Enter a Task"
                value={todo}
                className="input__box"
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="input_submit">
                GO
            </button>
        </form>
    )
}

export default InputField
