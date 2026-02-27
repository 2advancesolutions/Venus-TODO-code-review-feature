/**
 * ESLint Configuration
 * 
 * Configuration file for ESLint static code analysis tool.
 * Defines linting rules and settings for the Venus Todo application.
 * Uses modern ESLint flat config format.
 * 
 * @see https://eslint.org/docs/latest/use/configure/configuration-files-new
 */

import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'

/**
 * Export the ESLint configuration array
 * 
 * This configuration includes:
 * - Base JavaScript recommended rules
 * - React recommended rules
 * - React Hooks recommended rules
 * - Browser globals for web development
 * - JSX support for React components
 */
export default [
  /** 
   * Files to ignore during linting
   * Prevents linting of build output directories
   */
  { ignores: ['dist'] },
  
  /**
   * Main configuration object for TypeScript/React files
   * 
   * Applies to all .js, .jsx, .ts, and .tsx files
   */
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    
    /**
     * Language options configuration
     * Defines ECMAScript version, global variables, and parser settings
     */
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    
    /**
     * React plugin settings
     * Specifies React version for optimal rule application
     */
    settings: { react: { version: '18.2' } },
    
    /**
     * ESLint plugins to use
     * react: React-specific linting rules
     * react-hooks: Rules for React Hooks usage
     */
    plugins: {
      react,
      'react-hooks': reactHooks,
    },
    
    /**
     * Linting rules configuration
     * Combines recommended rules from multiple sources
     */
    rules: {
      // Base JavaScript recommended rules
      ...js.configs.recommended.rules,
      
      // React recommended rules
      ...react.configs.recommended.rules,
      
      // React JSX runtime rules (for React 17+ JSX transform)
      ...react.configs['jsx-runtime'].rules,
      
      // React Hooks recommended rules
      ...reactHooks.configs.recommended.rules,
      
      // Disable specific rules
      'react/jsx-no-target-blank': 'off',
      
      // React Refresh plugin rules
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
]