import React from 'react';
import { Todo } from '../types/todo';

interface TodoStatsProps {
  todos: Todo[];
  onClearCompleted: () => void;
}

export const TodoStats: React.FC<TodoStatsProps> = ({
  todos,
  onClearCompleted
}) => {
  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => todo.completed).length;
  const activeTodos = totalTodos - completedTodos;

  if (totalTodos === 0) {
    return null;
  }

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
          onClick={onClearCompleted}
          className="todo-add-button"
          style={{ marginTop: '0.5rem' }}
        >
          Clear Completed ({completedTodos})
        </button>
      )}
    </div>
  );
};