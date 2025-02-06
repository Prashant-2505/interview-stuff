import React from 'react';
import './styles.css';
import { Todo } from '../model';
import SingleTodo from './SingleTodo';

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className='todos'>
      <ul style={{width:"100%"}}>
        {todos.map((t) => (
         <SingleTodo todo={t} setTodos={setTodos} todos={todos}/>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
