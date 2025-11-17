import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner';
import '../styles/TodoList.css';

function TodoList({ todos, loading, onToggleTodo, onDeleteTodo }) {
  if (loading) {
    return (
      <div className="container">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="container">
      <div className="header">
        <h1>Todo List</h1>
        <Link to="/add" className="btn btn-primary">
          + Add Todo
        </Link>
      </div>

      {todos.length === 0 ? (
        <div className="no-todos">
          <p>No todos yet. <Link to="/add">Add one!</Link></p>
        </div>
      ) : (
        <div className="table-responsive">
          <table className="todo-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo, index) => (
                <tr key={todo.id} className={todo.completed ? 'completed-row' : ''}>
                  <td>{index + 1}</td>
                  <td>{todo.title}</td>
                  <td>
                    <span className={`status ${todo.completed ? 'completed' : 'not-completed'}`}>
                      {todo.completed ? '✓ Completed' : '○ Not Completed'}
                    </span>
                  </td>
                  <td className="actions-cell">
                    <Link to={`/todo/${todo.id}`} className="btn btn-view">
                      View
                    </Link>
                    <button
                      onClick={() => onToggleTodo(todo.id)}
                      className={`btn ${todo.completed ? 'btn-incomplete' : 'btn-complete'}`}
                      title={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
                    >
                      {todo.completed ? '↺ Incomplete' : '✓ Complete'}
                    </button>
                    <button
                      onClick={() => {
                        if (window.confirm('Are you sure you want to delete this todo?')) {
                          onDeleteTodo(todo.id);
                        }
                      }}
                      className="btn btn-delete"
                      title="Delete this todo"
                    >
                      🗑 Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default TodoList;
