import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import TodoList from './pages/TodoList';
import TodoDetails from './pages/TodoDetails';
import AddTodo from './pages/AddTodo';
import { fetchTodos } from './services/todoAPI';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch initial todos on mount
  useEffect(() => {
    const loadTodos = async () => {
      try {
        setLoading(true);
        const data = await fetchTodos();
        setTodos(data);
      } catch (error) {
        console.error('Error loading todos:', error);
      } finally {
        setLoading(false);
      }
    };
    loadTodos();
  }, []);

  // Add new todo to the list
  const handleAddTodo = (newTodo) => {
    const todoWithId = {
      ...newTodo,
      id: Math.max(...todos.map(t => t.id), 0) + 1,
      userId: 1,
    };
    setTodos([...todos, todoWithId]);
  };

  // Toggle todo completion status
  const handleToggleTodo = (todoId) => {
    setTodos(todos.map(todo =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Delete todo from list
  const handleDeleteTodo = (todoId) => {
    setTodos(todos.filter(todo => todo.id !== todoId));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/todos" />} />
        <Route 
          path="/todos" 
          element={
            <TodoList 
              todos={todos}
              loading={loading}
              onToggleTodo={handleToggleTodo}
              onDeleteTodo={handleDeleteTodo}
            />
          } 
        />
        <Route 
          path="/todo/:id" 
          element={
            <TodoDetails 
              todos={todos}
              onToggleTodo={handleToggleTodo}
            />
          } 
        />
        <Route 
          path="/add" 
          element={
            <AddTodo 
              onAddTodo={handleAddTodo}
            />
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
