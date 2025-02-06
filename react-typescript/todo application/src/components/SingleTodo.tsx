import React, { useState } from 'react';
import { Todo } from '../model';
import './styles.css';

interface Props {
  todo: Todo;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  todos: Todo[];
}

const SingleTodo: React.FC<Props> = ({ todo, setTodos, todos }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false); // Tracks edit mode
  const [editTodo, setEditTodo] = useState<string>(todo.todo); // Holds edited text

  const handleDone = (id: number) => {
    const updatedTodos = todos.map((item) =>
      item.id === id ? { ...item, isDone: !item.isDone } : item
    );
    setTodos(updatedTodos);
  };

  const handleDelete = (id: number) => {
    const filteredTodos = todos.filter((item) => item.id !== id);
    setTodos(filteredTodos);
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    const updatedTodos = todos.map((item) =>
      item.id === id ? { ...item, todo: editTodo } : item
    );
    setTodos(updatedTodos);
    setIsEditing(false);
  };

  return (
    <form
      className="todos__single"
      onSubmit={(e) => handleEdit(e, todo.id)} 
    >
      {isEditing ? (
        <input
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="todos__single--edit"
        />
      ) : (
        <div className={`todo_text ${todo.isDone ? 'done' : ''}`}>
          <span className="todos__single--text">{todo.todo}</span>
        </div>
      )}

      <div className="todo_btn">
        <span
          onClick={() => setIsEditing(!isEditing)} // Toggle edit mode
          className="icons"
          aria-label="edit"
        >
          ✏️
        </span>
        <span
          className="icons"
          onClick={() => handleDelete(todo.id)}
          aria-label="delete"
        >
          🗑️
        </span>
        <span
          className="icons"
          onClick={() => handleDone(todo.id)}
          aria-label={todo.isDone ? 'undo' : 'mark as done'}
        >
          {todo.isDone ? 'Undo' : 'Done'}
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
