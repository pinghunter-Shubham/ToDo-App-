# Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Start the Development Server
```bash
npm run dev
```
The app will open at `http://localhost:5173/`

### 2. Explore the App
- **Home Page** (`/todos`) - View all todos in a table
- **Add Todo** (`/add`) - Create new todos
- **View Details** - Click any "View" button to see todo details

### 3. Test Functionality
- ✅ Browse the list of 25 todos
- ✅ Click "View" to see details
- ✅ Add a new todo using the form
- ✅ See the responsive design on mobile

## 📝 What You Can Do

### View Todos
1. Navigate to the home page
2. See all 25 todos in a table
3. Each row shows: ID, Title, Status, and a View button

### Check Todo Details
1. Click the "View" button on any todo
2. See the full details including ID, Title, Status, and User ID
3. Use "Back to Todos" to return

### Add a New Todo
1. Click the "Add Todo" button
2. Enter a task title (required)
3. Optionally check "Mark as completed"
4. Click "Add Todo"
5. You'll see a success message and return to the home page

### Handle Errors
1. Try visiting `/todo/99999` to see a 404 page
2. Any API errors show helpful messages

## 📱 Responsive Design

The app works great on:
- 📱 Mobile phones (375px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1200px+)

## 🎯 Key Features

✨ **Live Data** - Uses real JSONPlaceholder API
⚡ **Fast Loading** - Loading spinners show progress
🎨 **Beautiful UI** - Clean, modern design
📱 **Responsive** - Works on all devices
🔒 **Error Handling** - Graceful error messages
♿ **Accessible** - Semantic HTML structure

## 🔧 Development

### Available Commands
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## 📂 Project Structure

```
src/
├── pages/          # Page components (TodoList, TodoDetails, AddTodo)
├── components/     # Reusable components (Spinner)
├── services/       # API calls (todoAPI.js)
├── styles/         # CSS files
├── App.jsx         # Main app with routing
└── main.jsx        # Entry point
```

## 🌐 API Endpoints Used

| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | /todos?_limit=25 | Get first 25 todos |
| GET | /todos/:id | Get single todo |
| POST | /todos | Create new todo |

## 💡 Tips

1. **Bookmark the pages** - `/todos`, `/todo/1`, `/add`
2. **Check browser console** - See API responses
3. **Try different IDs** - `/todo/5`, `/todo/10`, etc.
4. **Responsive test** - Resize browser to see mobile view
5. **No data loss** - Refresh anytime, data comes from API

## ❓ FAQ

**Q: Does it save my data?**
A: The POST request is mocked, so new todos won't persist after refresh. This is expected behavior.

**Q: Why is todo 99999 not found?**
A: JSONPlaceholder only has 200 todos (1-200). Try 201 to see 404 error.

**Q: Can I modify todos?**
A: Currently, you can only view and add. Edit/Delete can be added in the future.

**Q: What if the API is down?**
A: You'll see error messages guiding you to check the connection.

## 🎓 What You'll Learn

This project demonstrates:
- React Hooks (useState, useEffect)
- React Router navigation
- Async/await and Promises
- API integration with Axios
- Component composition
- State management
- Error handling
- Responsive CSS
- Form handling

## 🤝 Next Steps

1. Explore the code structure
2. Modify styles to personalize
3. Add new features (edit, delete)
4. Learn about the technologies used
5. Deploy the app to production

## 📚 Resources

- [React Docs](https://react.dev)
- [React Router](https://reactrouter.com)
- [Axios](https://axios-http.com)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com)

---

**Happy coding! 🚀**
