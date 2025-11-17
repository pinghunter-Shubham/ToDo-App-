import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createTodo } from '../services/todoAPI';
import '../styles/AddTodo.css';

function AddTodo({ onAddTodo }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    completed: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      setError('Task title is required');
      return;
    }

    try {
      setLoading(true);
      setError(null);
      
      onAddTodo(formData);
      alert('Task added successfully');
      
      // Navigate back to todos
      navigate('/todos');
    } catch (err) {
      setError('Failed to add todo');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="add-todo-form">
        <h1>Add New Todo</h1>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Task Title *</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter task title"
              required
            />
          </div>

          <div className="form-group checkbox">
            <label htmlFor="completed">
              <input
                type="checkbox"
                id="completed"
                name="completed"
                checked={formData.completed}
                onChange={handleChange}
              />
              <span>Mark as completed</span>
            </label>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Adding...' : 'Add Todo'}
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => navigate('/todos')}
              disabled={loading}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTodo;