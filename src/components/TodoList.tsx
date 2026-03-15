import React from 'react';
import { Todo } from '../types/todo';
import { TodoItem } from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  onToggleTodo: (id: string) => void;
  onDeleteTodo: (id: string) => void;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  onToggleTodo,
  onDeleteTodo
}) => {
  console.log('TodoList: Component rendered with', todos.length, 'todos');

  if (todos.length === 0) {
    console.log('TodoList: No todos found, showing empty state');
    return (
      <div className="empty-state">
        <p>No tasks yet. Add your first todo above!</p>
      </div>
    );
  }

  console.log('TodoList: Rendering', todos.length, 'todo items');

  return (
    <ul className="todo-list">
      {todos.map(todo => {
        console.log('TodoList: Rendering TodoItem for todo:', todo.id, todo.text);
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggleTodo}
            onDelete={onDeleteTodo}
          />
        );
      })}
    </ul>
  );
};