import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';
const api = axios.create({
  baseURL: API_BASE_URL,
});

// Fetch all todos (limit to first 25)
export const fetchTodos = async () => {
  try {
    const response = await api.get('/todos?_limit=25');
    return response.data;
  } catch (error) {
    console.error('Error fetching todos:', error);
    throw error;
  }
};

// Fetch a single todo by ID
export const fetchTodoById = async (id) => {
  try {
    const response = await api.get(`/todos/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching todo with id ${id}:`, error);
    throw error;
  }
};

// Create a new todo (mocked)
export const createTodo = async (todoData) => {
  try {
    const response = await api.post('/todos', {
      title: todoData.title,
      completed: todoData.completed,
      userId: 1,
    });
    return response.data;
  } catch (error) {
    console.error('Error creating todo:', error);
    throw error;
  }
};
