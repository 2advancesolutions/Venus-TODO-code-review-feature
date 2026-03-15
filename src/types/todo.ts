/**
 * Todo interface
 * 
 * Represents a single todo item with all its properties
 * Used throughout the application for type safety
 */
export interface Todo {
  /** Unique identifier for the todo item */
  id: string;
  /** The text content/description of the todo */
  text: string;
  /** Whether the todo has been completed */
  completed: boolean;
  /** Timestamp when the todo was created */
  createdAt: Date;
}

/**
 * TodoFilter type
 * 
 * Defines the possible filter states for viewing todos
 * Used to control which todos are displayed in the UI
 */
export type TodoFilter = 'all' | 'active' | 'completed';