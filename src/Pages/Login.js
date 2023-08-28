import React, { useState } from 'react'
import { login } from '../Api/api'
import { useNavigate } from 'react-router-dom'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const user = {
            email,
            password
        }

        try {
            const response = await login(user)
            
            if(response.token) {
              localStorage.setItem('token', response.token)
              localStorage.setItem('email', response.data.email) // Save email
              navigate('/') // Navigate to home page
              window.location.reload(); // Refresh the page
            } else {
              setError(response.error || 'Invalid email or password')
            }
        
        } catch (error) {
            setError('Invalid email or password')
        }        

        setEmail('')
        setPassword('')
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    return (
      <div>
          <h1>Login</h1>
          {error && <span style={{color: 'red'}}>{error}</span>}
          <form onSubmit={handleSubmit}>
              <label htmlFor="email">Email</label>
              <input type="text" id="email" onChange={handleEmailChange} value={email} />
              <label htmlFor="password">Password</label>
              <input type="password" id="password" onChange={handlePasswordChange} value={password} />
              <button type="submit">Submit</button>
          </form>
      </div>
    )
}

export default Login
