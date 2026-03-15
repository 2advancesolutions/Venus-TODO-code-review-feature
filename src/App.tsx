import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import { TodoStats } from './components/TodoStats';
import { useTodos } from './hooks/useTodos';

/**
 * Main App Component
 * 
 * The root component of the Venus Todo application.
 * Manages the overall application state and renders the main UI components.
 * Uses the useTodos hook for todo management functionality.
 * 
 * @returns {JSX.Element} The main application component
 */
function App() {
  /**
   * Destructure todo management functions from the useTodos hook
   * 
   * @property {Todo[]} todos - Array of all todo items
   * @property {Function} addTodo - Function to add a new todo
   * @property {Function} toggleTodo - Function to toggle todo completion status
   * @property {Function} deleteTodo - Function to delete a todo
   * @property {Function} clearCompleted - Function to remove all completed todos
   */
  const { todos, addTodo, toggleTodo, deleteTodo, clearCompleted } = useTodos();

  return (
    <div className="todo-app">
      <header className="todo-header">
        <h1>Venus Todo App</h1>
        <p>Organize your tasks efficiently</p>
      </header>

      <main>
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
      </main>
    </div>
  );
}

export default App;