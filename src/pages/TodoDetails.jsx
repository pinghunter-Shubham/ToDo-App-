import { useParams, Link } from 'react-router-dom';
import '../styles/TodoDetails.css';

function TodoDetails({ todos, onToggleTodo }) {
  const { id } = useParams();
  const todoId = parseInt(id);
  const todo = todos.find(t => t.id === todoId);

  if (!todo) {
    return (
      <div className="container">
        <Link to="/todos" className="btn btn-back">
          ← Back to Todos
        </Link>
        <div className="not-found">
          <h1>404 - Todo Not Found</h1>
          <p>The todo with ID {id} doesn't exist.</p>
          <Link to="/todos" className="btn btn-primary">
            Back to Todos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <Link to="/todos" className="btn btn-back">
        ← Back to Todos
      </Link>

      <div className="todo-details">
        <h1>Todo Details</h1>
        <div className="details-card">
          <div className="detail-row">
            <label>ID:</label>
            <span>{todo.id}</span>
          </div>
          <div className="detail-row">
            <label>Title:</label>
            <span>{todo.title}</span>
          </div>
          <div className="detail-row">
            <label>Status:</label>
            <span className={`status ${todo.completed ? 'completed' : 'not-completed'}`}>
              {todo.completed ? '✓ Completed' : '○ Not Completed'}
            </span>
          </div>
          <div className="detail-row">
            <label>User ID:</label>
            <span>{todo.userId}</span>
          </div>

          <div className="detail-actions">
            <button
              onClick={() => onToggleTodo(todo.id)}
              className={`btn ${todo.completed ? 'btn-incomplete' : 'btn-complete'}`}
            >
              {todo.completed ? '↺ Mark as Incomplete' : '✓ Mark as Complete'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoDetails;
