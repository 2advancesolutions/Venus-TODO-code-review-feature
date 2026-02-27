import React from 'react';
import { Todo } from '../types/todo';
import { TodoItem } from './TodoItem';

interface TodoListProps {
  /**
   * Array of todo items to display
   */
  todos: Todo[];
  /**
   * Callback function to toggle todo completion status
   * Receives the todo ID as parameter
   */
  onToggleTodo: (id: string) => void;
  /**
   * Callback function to delete a todo
   * Receives the todo ID as parameter
   */
  onDeleteTodo: (id: string) => void;
}

/**
 * TodoList Component
 * 
 * Displays a list of todo items. Shows an empty state when no todos exist.
 * Renders individual TodoItem components for each todo in the array.
 * 
 * @param {TodoListProps} props - Component props
 * @param {Todo[]} props.todos - Array of todo items to display
 * @param {Function} props.onToggleTodo - Function to call when toggling a todo
 * @param {Function} props.onDeleteTodo - Function to call when deleting a todo
 * @returns {JSX.Element} The todo list component
 */
export const TodoList: React.FC<TodoListProps> = ({
  todos,
  onToggleTodo,
  onDeleteTodo
}) => {
  /**
   * Render empty state when no todos exist
   * 
   * @returns {JSX.Element|null} Empty state message or null
   */
  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <p>No tasks yet. Add your first todo above!</p>
      </div>
    );
  }

  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggleTodo}
          onDelete={onDeleteTodo}
        />
      ))}
    </ul>
  );
};