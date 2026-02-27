import { useState, useEffect } from 'react';
import { Todo } from '../types/todo';
import { v4 as uuidv4 } from 'uuid';

const STORAGE_KEY = 'venus-todos';

/**
 * Custom hook for managing todo state and localStorage persistence
 * 
 * Provides CRUD operations for todos with automatic localStorage sync
 * 
 * @returns {Object} Object containing todos array and CRUD functions
 * @property {Todo[]} todos - Array of all todo items
 * @property {Function} addTodo - Function to add a new todo
 * @property {Function} toggleTodo - Function to toggle todo completion status
 * @property {Function} deleteTodo - Function to delete a todo
 * @property {Function} clearCompleted - Function to remove all completed todos
 */
export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  // Load todos from localStorage on mount
  useEffect(() => {
    const storedTodos = localStorage.getItem(STORAGE_KEY);
    if (storedTodos) {
      try {
        const parsedTodos = JSON.parse(storedTodos);
        setTodos(parsedTodos.map((todo: any) => ({
          ...todo,
          createdAt: new Date(todo.createdAt)
        })));
      } catch (error) {
        console.error('Error loading todos from localStorage:', error);
        setTodos([]);
      }
    }
  }, []);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  /**
   * Add a new todo item
   * 
   * @param {string} text - The text content of the todo item
   * @returns {void}
   * @example
   * addTodo("Buy groceries")
   */
  const addTodo = (text: string) => {
    if (!text.trim()) return;

    const newTodo: Todo = {
      id: uuidv4(),
      text: text.trim(),
      completed: false,
      createdAt: new Date()
    };

    setTodos(prevTodos => [...prevTodos, newTodo]);
  };

  /**
   * Toggle the completion status of a todo item
   * 
   * @param {string} id - The unique identifier of the todo item
   * @returns {void}
   * @example
   * toggleTodo("123e4567-e89b-12d3-a456-426614174000")
   */
  const toggleTodo = (id: string) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  /**
   * Delete a todo item by its ID
   * 
   * @param {string} id - The unique identifier of the todo item to delete
   * @returns {void}
   * @example
   * deleteTodo("123e4567-e89b-12d3-a456-426614174000")
   */
  const deleteTodo = (id: string) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  /**
   * Remove all completed todo items
   * 
   * @returns {void}
   * @example
   * clearCompleted()
   */
  const clearCompleted = () => {
    setTodos(prevTodos => prevTodos.filter(todo => !todo.completed));
  };

  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    clearCompleted
  };
};