import React from 'react'
import ReactDOM from 'react-dom/client'
import PostList from './PostList'
import UserList from './UserList'
// import App from './App.jsx'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <PostList />
    <UserList />
  </React.StrictMode>,
)
