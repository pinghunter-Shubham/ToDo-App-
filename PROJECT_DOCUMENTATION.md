# React ToDo App - Project Documentation

## Project Overview

This is a fully functional React ToDo application that demonstrates modern web development practices using React, React Router, and RESTful APIs.

## Requirements Met

### ✅ API Integration
- Uses JSONPlaceholder API at `https://jsonplaceholder.typicode.com`
- Implemented endpoints:
  - `GET /todos?_limit=25` - Fetch first 25 todos
  - `GET /todos/:id` - Fetch single todo
  - `POST /todos` - Create new todo (mocked)

### ✅ Routes & Screens

#### 1. Home Route (`/`)
- Redirects to `/todos`
- Uses React Router's `Navigate` component

#### 2. Todo List Page (`/todos`)
- **Features:**
  - Displays first 25 todos in a responsive table
  - Columns: ID, Title, Status, Action
  - Status shows "Completed" or "Not Completed" with color-coded badges
  - "View" button for each row linking to `/todo/:id`
  - Loading spinner while fetching data
  - Error handling with user-friendly messages
  - "Add Todo" button for navigation to `/add`

#### 3. Todo Details Page (`/todo/:id`)
- **Features:**
  - Fetches and displays single todo by ID
  - Shows ID, Title, Status, User ID
  - Beautiful card-based layout
  - "Back to Todos" navigation button
  - 404 page if todo not found
  - Loading spinner during data fetch

#### 4. Add Todo Page (`/add`)
- **Features:**
  - Form with Task Title input (required)
  - Completed checkbox for marking as done
  - Submit button posts to API
  - Cancel button returns to list
  - Form validation
  - Success alert on submission
  - Auto-redirect to `/todos` after submission
  - New todo appears in list until page refresh

### ✅ UI/UX Features

#### Loading States
- Spinner component with animation
- Shows "Loading..." text
- Consistent across all pages

#### Responsive Design
- Mobile-first approach
- Tablet breakpoint at 768px
- Full desktop support
- Flexible layouts for all screen sizes

#### Error Handling
- Try-catch blocks in all API calls
- 404 pages for missing todos
- User-friendly error messages
- Network error handling

#### Styling
- Modern, clean design
- Color-coded status badges
- Hover effects on interactive elements
- Professional color palette
- Proper spacing and typography

## File Structure

```
src/
├── components/
│   └── Spinner.jsx              # Loading spinner
├── pages/
│   ├── TodoList.jsx             # Todo list table view
│   ├── TodoDetails.jsx          # Single todo detail view
│   └── AddTodo.jsx              # Add todo form
├── services/
│   └── todoAPI.js               # Axios API client
├── styles/
│   ├── TodoList.css             # Table styles
│   ├── TodoDetails.css          # Details page styles
│   ├── AddTodo.css              # Form styles
│   └── Spinner.css              # Spinner animation
├── App.jsx                      # Main component with routing
├── App.css                      # Global styles
├── main.jsx                     # React entry point
├── index.css                    # Base styles
└── vite.config.js               # Vite configuration
```

## Component Details

### Spinner Component
```javascript
// Location: src/components/Spinner.jsx
- Rotating spinner animation
- Loading text
- Centered layout
- Used on all pages during data fetch
```

### TodoList Component
```javascript
// Location: src/pages/TodoList.jsx
- Fetches 25 todos on mount
- Displays in responsive table
- Links to detail pages
- Error and loading states
- Add Todo button
```

### TodoDetails Component
```javascript
// Location: src/pages/TodoDetails.jsx
- Fetches single todo by ID from params
- Beautiful card layout
- 404 handling for missing todos
- Back button navigation
```

### AddTodo Component
```javascript
// Location: src/pages/AddTodo.jsx
- Form with validation
- Checkbox for completion status
- POST request to API
- Success notification
- Redirect to home
```

### API Service
```javascript
// Location: src/services/todoAPI.js
- Axios instance with base URL
- fetchTodos() - get first 25
- fetchTodoById(id) - get single
- createTodo(data) - post new todo
- Error handling in each function
```

## Styling Architecture

### Global Styles (App.css)
- Container layout
- Button styles (primary, secondary, view, back)
- Status badges
- Error messages
- Responsive utilities

### Component Styles
- **TodoList.css** - Table and header
- **TodoDetails.css** - Detail card and 404 page
- **AddTodo.css** - Form layout and inputs
- **Spinner.css** - Animated spinner

### Base Styles (index.css)
- Root variables
- HTML/body resets
- Link colors
- Button base styles

## State Management

### Components use React Hooks:
- `useState` - Local state for todos, loading, error
- `useEffect` - API calls on mount/dependency changes
- `useParams` - Get ID from URL params
- `useNavigate` - Programmatic navigation

## API Integration Details

### Axios Configuration
```javascript
const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});
```

### Request Examples
```javascript
// Get todos
GET /todos?_limit=25
Response: Array of 25 todo objects

// Get single todo
GET /todos/1
Response: Single todo object

// Create todo (mocked)
POST /todos
Body: { title: "...", completed: false, userId: 1 }
Response: Echoed with generated ID
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Development Workflow

### Start Development
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Key Features Implemented

✅ React Router for multi-page navigation
✅ Axios for API requests
✅ Loading spinners during data fetch
✅ Error boundaries and error messages
✅ 404 pages for missing resources
✅ Form validation
✅ Responsive table layout
✅ Mobile-friendly design
✅ CSS animations
✅ Graceful error handling
✅ User feedback (alerts, messages)
✅ Clean code structure
✅ Reusable components
✅ Proper state management

## Testing Scenarios

1. **Navigate to /todos** - See list of 25 todos
2. **Click View on any todo** - See details page
3. **Click Back button** - Return to list
4. **Navigate to /add** - See form
5. **Fill and submit form** - Get success alert and redirect
6. **Navigate to /todo/99999** - See 404 page
7. **Refresh page** - Data persists from API
8. **Test on mobile** - Layout adapts properly

## Performance Optimizations

- Code splitting with React Router
- Lazy loading of pages
- Minimized CSS
- Fast refresh in development
- Optimized re-renders with proper hooks usage
- No unnecessary state updates

## Future Enhancements

Possible improvements for scalability:
- Redux/Context API for complex state
- React Query for advanced caching
- Pagination for large lists
- Sorting and filtering
- Search functionality
- Edit todo functionality
- Delete todo functionality
- User authentication
- Local storage persistence
- Dark mode theme

## Troubleshooting

### Port 5173 already in use
```bash
# Use different port
npm run dev -- --port 3000
```

### Axios CORS errors
- JSONPlaceholder allows CORS by default
- Check console for specific errors
- Verify URL formatting

### Component not rendering
- Check React Router setup
- Verify component imports
- Check browser console for errors

## Support & Resources

- [React Documentation](https://react.dev)
- [React Router Documentation](https://reactrouter.com)
- [Axios Documentation](https://axios-http.com)
- [Vite Documentation](https://vite.dev)
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com)
