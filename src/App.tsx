import React from 'react';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import { TodoStats } from './components/TodoStats';
import { useTodos } from './hooks/useTodos';

function App() {
  const { todos, addTodo, toggleTodo, deleteTodo, clearCompleted } = useTodos();

  return (
    <div className="todo-app">
      <header className="todo-header">
        <h1>Venus Todo App</h1>
        <p>Manage your tasks efficiently</p>
      </header>
      
      <TodoInput onAddTodo={addTodo} />
      
      <TodoList
        todos={todos}
        onToggleTodo={toggleTodo}
        onDeleteTodo={deleteTodo}
      />
      
      <TodoStats
        todos={todos}
        onClearCompleted={clearCompleted}
      />
    </div>
  );
}

export default App;
