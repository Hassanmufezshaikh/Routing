# 📌 React Router v6 Protected Routing (TypeScript)

This project demonstrates how to implement **routing and protected routes** in a React 18 application using **React Router v6** and **TypeScript**.

It includes:

- Public Routes
- Dynamic Routes
- Protected Routes (Authentication-based access)
- 404 Fallback Route
- Redirect using Navigate

# 🚀 Tech Stack

- React 18
- TypeScript
- react-router-dom v6

# 🔀 Routing Overview

The application uses BrowserRouter, Routes, and Route from react-router-dom.

## Public Routes

These routes are accessible to all users:

- /about
- /contact
- /user/:id
- /login

## 🔢 Dynamic Route

The :id parameter allows dynamic user profile rendering.

Inside UserProfile, you can access the ID using:

# 🔐 Protected Route Implementation

Protected routes restrict access based on authentication state.

## PrivateRoute Component

### How It Works

- If isAuthenticated is true → render child component
- If false → redirect to /login

## Protecting the Dashboard Route

This ensures:

- Authenticated users → can access dashboard
- Unauthenticated users → redirected to login

# ⚠️ Important Note

✅ Correct:

Only wrap the route inside PrivateRoute.

# 🛑 404 Fallback Route

# 🧠 Key Concepts Covered

- Client-side routing
- Route protection
- Conditional rendering
- Redirects using Navigate
- Dynamic route parameters
- TypeScript props typing

# 📈 Future Improvements

- Replace isAuthenticated with real authentication logic
- Use Context API or Redux for global auth state
- Add role-based route protection
- Add persistent login using localStorage or JWT

# 🎯 Learning Outcome

By completing this project, you understand:

- How React Router v6 works
- How to create reusable protected route components
- How to manage conditional navigation
- How to structure routing in scalable React applications
