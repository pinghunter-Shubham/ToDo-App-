# API Integration Guide

## 📡 JSONPlaceholder API Reference

The React ToDo App uses the free [JSONPlaceholder](https://jsonplaceholder.typicode.com) API for all data operations.

---

## 🔗 API Base URL

```
https://jsonplaceholder.typicode.com
```

---

## 📥 Available Endpoints

### 1. Get All Todos (Limited to 25)

**Endpoint:** `GET /todos?_limit=25`

**Description:** Fetches the first 25 todos from the database.

**Request:**
```javascript
GET https://jsonplaceholder.typicode.com/todos?_limit=25
```

**Response (200 OK):**
```json
[
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  // ... 22 more todos
]
```

**Code Implementation:**
```javascript
// In todoAPI.js
export const fetchTodos = async () => {
  try {
    const response = await api.get('/todos?_limit=25');
    return response.data;
  } catch (error) {
    console.error('Error fetching todos:', error);
    throw error;
  }
};

// Usage in component
useEffect(() => {
  fetchTodos()
    .then(data => setTodos(data))
    .catch(err => setError('Failed to load todos'));
}, []);
```

---

### 2. Get Single Todo by ID

**Endpoint:** `GET /todos/:id`

**Description:** Fetches a single todo by its ID.

**Request:**
```javascript
GET https://jsonplaceholder.typicode.com/todos/5
```

**Response (200 OK):**
```json
{
  "userId": 1,
  "id": 5,
  "title": "laboriosam mollitia quam adipisci commodi",
  "completed": false
}
```

**Response (404 Not Found):**
```json
{}
```

**Code Implementation:**
```javascript
// In todoAPI.js
export const fetchTodoById = async (id) => {
  try {
    const response = await api.get(`/todos/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching todo with id ${id}:`, error);
    throw error;
  }
};

// Usage in component
useEffect(() => {
  fetchTodoById(todoId)
    .then(data => {
      if (!data.id) {
        setNotFound(true);
      } else {
        setTodo(data);
      }
    })
    .catch(err => setError('Failed to load todo'));
}, [todoId]);
```

---

### 3. Create New Todo

**Endpoint:** `POST /todos`

**Description:** Creates a new todo. JSONPlaceholder mocks the response.

**Request:**
```javascript
POST https://jsonplaceholder.typicode.com/todos
Content-Type: application/json

{
  "title": "Buy groceries",
  "completed": false,
  "userId": 1
}
```

**Response (201 Created - Mocked):**
```json
{
  "userId": 1,
  "title": "Buy groceries",
  "completed": false,
  "id": 201
}
```

**Code Implementation:**
```javascript
// In todoAPI.js
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

// Usage in component
async function handleSubmit(e) {
  e.preventDefault();
  try {
    const response = await createTodo(formData);
    alert('Task added successfully');
    // Add to local state to show in list
    setTodos([...todos, response]);
    navigate('/todos');
  } catch (error) {
    setError('Failed to add todo');
  }
}
```

---

## 🛠️ Axios Configuration

The app uses Axios with a configured base URL:

```javascript
import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export default api;
```

### Benefits:
- Single source of truth for API URL
- Automatic URL joining
- Easy to update base URL
- Consistent headers can be added

---

## 🔄 Request/Response Examples

### Example 1: Fetch All Todos

**Request:**
```javascript
const todoList = await fetchTodos();
```

**Response:**
```javascript
[
  { userId: 1, id: 1, title: "delectus...", completed: false },
  { userId: 1, id: 2, title: "quis ut...", completed: false },
  // ... 23 more
]
```

### Example 2: Fetch Specific Todo

**Request:**
```javascript
const todo = await fetchTodoById(7);
```

**Response:**
```javascript
{
  userId: 1,
  id: 7,
  title: "voluptate accusantium doloremque",
  completed: true
}
```

### Example 3: Create New Todo

**Request:**
```javascript
const newTodo = await createTodo({
  title: "Learn React",
  completed: false
});
```

**Response:**
```javascript
{
  userId: 1,
  title: "Learn React",
  completed: false,
  id: 201
}
```

---

## ⚠️ Error Handling

### Network Errors

```javascript
try {
  const data = await fetchTodos();
} catch (error) {
  if (!error.response) {
    // Network error
    console.error('Network error:', error.message);
  } else if (error.response.status === 404) {
    // Not found
    console.error('Resource not found');
  } else {
    // Server error
    console.error('Server error:', error.response.status);
  }
}
```

### Common HTTP Status Codes

| Code | Meaning | Handling |
|------|---------|----------|
| 200 | OK | Success ✅ |
| 201 | Created | New resource created ✅ |
| 400 | Bad Request | Invalid input ❌ |
| 404 | Not Found | Resource missing ❌ |
| 500 | Server Error | Server issue ❌ |

---

## 📊 Data Structure

### Todo Object

Every todo returned by the API has this structure:

```typescript
interface Todo {
  userId: number;      // User who owns the todo (1-10)
  id: number;          // Unique identifier (1-200)
  title: string;       // Todo description
  completed: boolean;  // Completion status
}
```

### Example Todo Objects

**Completed Todo:**
```json
{
  "userId": 1,
  "id": 4,
  "title": "et doloribus ad provident ut nihil",
  "completed": true
}
```

**Pending Todo:**
```json
{
  "userId": 1,
  "id": 5,
  "title": "laboriosam mollitia quam adipisci commodi",
  "completed": false
}
```

---

## 🧪 Testing the API Directly

You can test the API endpoints directly in your browser:

### In Browser Address Bar:

```
# Get all todos
https://jsonplaceholder.typicode.com/todos?_limit=25

# Get specific todo
https://jsonplaceholder.typicode.com/todos/5

# Get todos for specific user
https://jsonplaceholder.typicode.com/todos?userId=1
```

### In Browser Console:

```javascript
// Fetch todos
fetch('https://jsonplaceholder.typicode.com/todos?_limit=25')
  .then(res => res.json())
  .then(data => console.log(data));

// Fetch single todo
fetch('https://jsonplaceholder.typicode.com/todos/5')
  .then(res => res.json())
  .then(data => console.log(data));

// Create todo
fetch('https://jsonplaceholder.typicode.com/todos', {
  method: 'POST',
  body: JSON.stringify({
    title: 'Test',
    completed: false,
    userId: 1
  }),
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then(res => res.json())
  .then(data => console.log(data));
```

---

## 🚀 Best Practices Used

### 1. Single Responsibility
Each function has one purpose:
```javascript
fetchTodos()      // Only fetch all todos
fetchTodoById()   // Only fetch single todo
createTodo()      // Only create todo
```

### 2. Error Handling
Always wrap API calls in try-catch:
```javascript
try {
  const data = await fetchTodos();
  // success
} catch (error) {
  // handle error
}
```

### 3. Async/Await
Modern promise handling:
```javascript
const data = await api.get('/todos');  // Wait for response
// data is ready to use
```

### 4. Consistent Return Format
All functions return the data:
```javascript
return response.data;  // Consistent across all functions
```

---

## 🔌 Integration with React Components

### TodoList Component Integration

```javascript
// Fetch in useEffect
useEffect(() => {
  setLoading(true);
  fetchTodos()
    .then(data => setTodos(data))
    .catch(err => setError('Failed to load'))
    .finally(() => setLoading(false));
}, []);
```

### TodoDetails Component Integration

```javascript
// Fetch specific todo by ID from URL
useEffect(() => {
  fetchTodoById(id)
    .then(data => {
      if (!data.id) setNotFound(true);
      else setTodo(data);
    })
    .catch(err => setError('Failed to load'));
}, [id]);
```

### AddTodo Component Integration

```javascript
// Send form data to API
async function handleSubmit(e) {
  e.preventDefault();
  const response = await createTodo(formData);
  // Add to local state
  setTodos(prev => [...prev, response]);
}
```

---

## 📈 Performance Considerations

### Caching
The app doesn't implement caching, so data is fetched fresh each time. For production, consider:
```javascript
// Simple cache example
const cache = new Map();
export const fetchTodos = async () => {
  if (cache.has('todos')) {
    return cache.get('todos');
  }
  const data = await api.get('/todos?_limit=25');
  cache.set('todos', data.data);
  return data.data;
};
```

### Pagination
For large datasets, use pagination:
```javascript
api.get('/todos?_page=1&_limit=25');  // Page 1
api.get('/todos?_page=2&_limit=25');  // Page 2
```

---

## 🔗 External Resources

- **JSONPlaceholder Docs:** https://jsonplaceholder.typicode.com
- **Axios Docs:** https://axios-http.com
- **REST API Guide:** https://restfulapi.net

---

## ✨ Summary

The API integration in this app demonstrates:
- ✅ Fetching data (GET requests)
- ✅ Creating data (POST requests)
- ✅ Error handling
- ✅ Async operations
- ✅ Component integration
- ✅ State management with API data

This foundation can be extended with additional operations (PUT, DELETE, PATCH) and more sophisticated patterns as needed!
