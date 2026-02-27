import React from 'react';
import { Todo } from '../types/todo';

interface TodoStatsProps {
  /**
   * Array of todo items to calculate statistics from
   */
  todos: Todo[];
  /**
   * Callback function to clear all completed todos
   */
  onClearCompleted: () => void;
}

/**
 * TodoStats Component
 * 
 * Displays statistics about the current todo list including total count,
 * completed count, and active count. Provides a button to clear completed todos.
 * 
 * @param {TodoStatsProps} props - Component props
 * @param {Todo[]} props.todos - Array of todo items to calculate stats from
 * @param {Function} props.onClearCompleted - Function to call when clearing completed todos
 * @returns {JSX.Element|null} The statistics component or null if no todos
 */
export const TodoStats: React.FC<TodoStatsProps> = ({
  todos,
  onClearCompleted
}) => {
  /**
   * Calculate total number of todos
   * 
   * @returns {number} Total count of todos
   */
  const totalTodos = todos.length;

  /**
   * Calculate number of completed todos
   * 
   * @returns {number} Count of completed todos
   */
  const completedTodos = todos.filter(todo => todo.completed).length;

  /**
   * Calculate number of active (incomplete) todos
   * 
   * @returns {number} Count of active todos
   */
  const activeTodos = totalTodos - completedTodos;

  /**
   * Don't render anything if there are no todos
   * 
   * @returns {null} Null to prevent rendering
   */
  if (totalTodos === 0) {
    return null;
  }

  /**
   * Handle clear completed button click
   * 
   * Calls the parent onClearCompleted function
   * 
   * @returns {void}
   */
  const handleClearCompleted = () => {
    onClearCompleted();
  };

  return (
    <div className="todo-stats">
      <p>
        <strong>{totalTodos}</strong> total task{totalTodos !== 1 ? 's' : ''}
        {completedTodos > 0 && (
          <>
            , <strong>{completedTodos}</strong> completed
          </>
        )}
        {activeTodos > 0 && (
          <>
            , <strong>{activeTodos}</strong> active
          </>
        )}
      </p>
      {completedTodos > 0 && (
        <button
          onClick={handleClearCompleted}
          className="todo-add-button"
          style={{ marginTop: '0.5rem' }}
        >
          Clear Completed ({completedTodos})
        </button>
      )}
    </div>
  );
};