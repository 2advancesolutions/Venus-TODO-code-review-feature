import React from 'react';
import { Todo } from '../types/todo';

interface TodoItemProps {
  /**
   * The todo item to display
   */
  todo: Todo;
  /**
   * Callback function to toggle todo completion status
   * Receives the todo ID as parameter
   */
  onToggle: (id: string) => void;
  /**
   * Callback function to delete a todo
   * Receives the todo ID as parameter
   */
  onDelete: (id: string) => void;
}

/**
 * TodoItem Component
 * 
 * Displays a single todo item with checkbox, text, and delete button.
 * Handles user interactions for toggling completion and deleting todos.
 * 
 * @param {TodoItemProps} props - Component props
 * @param {Todo} props.todo - The todo item to display
 * @param {Function} props.onToggle - Function to call when toggling completion
 * @param {Function} props.onDelete - Function to call when deleting the todo
 * @returns {JSX.Element} The todo item component
 */
export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onToggle,
  onDelete
}) => {
  /**
   * Handle checkbox toggle
   * 
   * Calls the parent onToggle function with the todo ID
   * 
   * @returns {void}
   */
  const handleToggle = () => {
    onToggle(todo.id);
  };

  /**
   * Handle delete button click
   * 
   * Calls the parent onDelete function with the todo ID
   * 
   * @returns {void}
   */
  const handleDelete = () => {
    onDelete(todo.id);
  };

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