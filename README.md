# React ToDo App

A modern, responsive React application for managing todos using the JSONPlaceholder API. Built with React Router for navigation and Axios for API calls.

## 🚀 Features

- **Todo List View** (`/todos`) - Display first 25 todos in a responsive table
- **Todo Details** (`/todo/:id`) - View detailed information about a specific todo with 404 handling
- **Add Todo** (`/add`) - Create new todos with title and completion status
- **Loading Spinners** - Visual feedback during API calls
- **Responsive Design** - Mobile-friendly layout
- **Error Handling** - Graceful error messages and 404 pages

## 🛠️ Tech Stack

- **React 19.2** - UI library
- **React Router 7.9** - Client-side routing
- **Axios 1.13** - HTTP client for API calls
- **Vite** - Modern build tool
- **CSS3** - Styling with responsive design

## 📋 Routes

| Route | Description |
|-------|-------------|
| `/` | Redirects to `/todos` |
| `/todos` | Home page - displays list of 25 todos in a table |
| `/todo/:id` | Details page for a specific todo |
| `/add` | Form page to create a new todo |

## 🔌 API Endpoints

The app uses [JSONPlaceholder](https://jsonplaceholder.typicode.com) API:

- `GET /todos?_limit=25` - Fetch first 25 todos
- `GET /todos/:id` - Fetch a specific todo
- `POST /todos` - Create a new todo (mocked response)

## 📁 Project Structure

```
src/
├── components/
│   └── Spinner.jsx          # Loading spinner component
├── pages/
│   ├── TodoList.jsx         # Home page with todo table
│   ├── TodoDetails.jsx      # Detail page for single todo
│   └── AddTodo.jsx          # Form to add new todo
├── services/
│   └── todoAPI.js           # API service with axios
├── styles/
│   ├── TodoList.css         # Styles for todo list
│   ├── TodoDetails.css      # Styles for todo details
│   ├── AddTodo.css          # Styles for add todo form
│   └── Spinner.css          # Styles for spinner
├── App.jsx                  # Main app with routing
├── App.css                  # Global styles
├── main.jsx                 # React entry point
└── index.css                # Base styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will be available at `http://localhost:5173/`

## 📝 Usage

### View Todo List
1. Navigate to `http://localhost:5173/todos` or just `http://localhost:5173/`
2. See the table with ID, Title, and Status columns
3. Click "View" button to see todo details

### View Todo Details
1. Click "View" on any todo from the list
2. See full details including ID, Title, Status, and User ID
3. If todo doesn't exist, see a 404 message

### Add a New Todo
1. Click "Add Todo" button from the home page or navigate to `/add`
2. Fill in the task title (required)
3. Optionally check "Mark as completed"
4. Click "Add Todo" button
5. Receive success alert and redirect to home page

## 🎨 UI Components

### Table
- Responsive table with hover effects
- Status badges (Completed/Not Completed)
- View button for each row

### Form
- Text input for task title
- Checkbox for completion status
- Submit and Cancel buttons
- Form validation

### Spinner
- Loading indicator during API calls
- Animated circular spinner

## ⚡ Performance Features

- **Fast Refresh** - Instant updates during development
- **Code Splitting** - Automatic with React Router
- **Lazy Loading** - Components loaded on route change
- **CSS Optimization** - Minified styles in production

## 🔍 Error Handling

- **404 Pages** - When todo is not found
- **API Errors** - Graceful error messages
- **Validation** - Form validation before submission
- **Network Errors** - Catch and display errors

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints at 768px for tablets/desktops
- Optimized touch interactions
- Flexible layouts

## 🧪 Testing the App

1. **List View**: Navigate to `/todos` to see all todos
2. **Details View**: Click any View button to see todo details
3. **Add Todo**: Click "Add Todo" and fill in the form
4. **404 Test**: Navigate to `/todo/99999` to see 404 page
5. **Error Handling**: Check browser console for API responses

## 📦 Build & Deployment

```bash
# Build for production
npm run build

# Output will be in 'dist/' folder
```

Deploy the `dist/` folder to any static hosting service.

## 🤝 Contributing

Feel free to submit issues or pull requests for improvements.

## 📄 License

This project is open source and available under the MIT License.

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# ToDo-App-
