import React, { useState } from 'react';

interface TodoInputProps {
  /**
   * Callback function called when a new todo should be added
   * Receives the todo text as parameter
   */
  onAddTodo: (text: string) => void;
}

/**
 * TodoInput Component
 * 
 * Provides an input field and form for adding new todo items.
 * Handles form submission, input validation, and keyboard shortcuts.
 * 
 * @param {TodoInputProps} props - Component props
 * @param {Function} props.onAddTodo - Function to call when adding a new todo
 * @returns {JSX.Element} The input form component
 */
export const TodoInput: React.FC<TodoInputProps> = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState('');

  /**
   * Handle form submission
   * 
   * Prevents default form behavior, validates input, and adds the todo
   * 
   * @param {React.FormEvent} e - The form submission event
   * @returns {void}
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onAddTodo(inputValue.trim());
      setInputValue('');
    }
  };

  /**
   * Handle keyboard events for Enter key submission
   * 
   * Allows submission with Enter key while preventing default behavior
   * 
   * @param {React.KeyboardEvent} e - The keyboard event
   * @returns {void}
   */
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as any);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-input-container">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="What needs to be done?"
        className="todo-input"
        maxLength={200}
      />
      <button
        type="submit"
        disabled={!inputValue.trim()}
        className="todo-add-button"
      >
        Add Task
      </button>
    </form>
  );
};