import React from 'react';
import { Todo } from '@/types/todo';

interface TodoStatsProps {
  todos: Todo[];
  onClearCompleted: () => void;
}

export const TodoStats: React.FC<TodoStatsProps> = ({ todos, onClearCompleted }) => {
  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => todo.completed).length;
  const activeTodos = totalTodos - completedTodos;

  if (totalTodos === 0) {
    return null;
  }

  return (
    <div className="todo-stats">
      <p>
        {activeTodos} active, {completedTodos} completed, {totalTodos} total
      </p>
      {completedTodos > 0 && (
        <button
          onClick={onClearCompleted}
          className="todo-add-button"
          style={{ marginTop: '0.5rem' }}
        >
          Clear Completed
        </button>
      )}
    </div>
  );
};
