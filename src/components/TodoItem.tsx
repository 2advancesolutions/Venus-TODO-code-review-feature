import React from 'react';
import { Todo } from '../types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onToggle,
  onDelete
}) => {
  const handleToggle = () => {
    console.log('TodoItem: handleToggle called for todo:', todo.id, todo.text);
    onToggle(todo.id);
  };

  const handleDelete = () => {
    console.log('TodoItem: handleDelete called for todo:', todo.id, todo.text);
    onDelete(todo.id);
  };

  console.log('TodoItem: Component rendered for todo:', todo.id, todo.text, 'completed:', todo.completed);

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggle}
        className="todo-checkbox"
        aria-label={`Mark "${todo.text}" as ${todo.completed ? 'incomplete' : 'complete'}`}
      />
      <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
        {todo.text}
      </span>
      <button
        onClick={handleDelete}
        className="todo-delete-button"
        aria-label={`Delete "${todo.text}"`}
      >
        Delete
      </button>
    </li>
  );
};