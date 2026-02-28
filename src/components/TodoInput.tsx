import React, { useState } from 'react';

interface TodoInputProps {
  onAddTodo: (text: string) => void;
}

export const TodoInput: React.FC<TodoInputProps> = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    console.log('TodoInput: handleSubmit called with event:', e);
    e.preventDefault();
    if (inputValue.trim()) {
      console.log('TodoInput: Adding new todo:', inputValue.trim());
      onAddTodo(inputValue.trim());
      setInputValue('');
      console.log('TodoInput: Input value cleared');
    } else {
      console.log('TodoInput: Input value is empty, not adding todo');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    console.log('TodoInput: handleKeyPress called with key:', e.key);
    if (e.key === 'Enter' && !e.shiftKey) {
      console.log('TodoInput: Enter key pressed, submitting form');
      e.preventDefault();
      handleSubmit(e as any);
    }
  };

  console.log('TodoInput: Component rendered with inputValue:', inputValue);

  return (
    <form onSubmit={handleSubmit} className="todo-input-container">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          console.log('TodoInput: Input changed to:', e.target.value);
          setInputValue(e.target.value);
        }}
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