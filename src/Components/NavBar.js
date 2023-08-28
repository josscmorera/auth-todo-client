import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { removeUserToken } from '../Api/api'

function NavBar({ user, isVerified, setRefreshToken }) {
  
  const navigate = useNavigate();

  const handleLogout = () => {
    removeUserToken(); // clear user data from local storage
    setRefreshToken(prev => prev + 1); // trigger a re-render of the App component
    navigate('/'); // Navigate to home page
  }

  return (
    <div>
      <Link to={'/'}>Home</Link>{' '}
      {isVerified ? (
        <>
          <Link to={'/profile'}>{user}</Link>{' '}
          <Link to={'/todos'}>Todos</Link>{' '}
          <button onClick={handleLogout}>Logout</button>
          <span>Welcome, {user}!</span>
        </>
      ) : (
        <>
          <Link to={'/login'}>Login</Link>{' '}
          <Link to={'/register'}>Register</Link>
        </>
      )}
    </div>
  )
}

export default NavBar
