import React, { useState } from 'react'
import { register } from '../Api/api'
import { useNavigate } from 'react-router-dom'

function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newUser = {
            email,
            password
        }
        
        try {
            const response = await register(newUser)
            if(response.success) {
              localStorage.setItem('token', response.token)
              localStorage.setItem('email', response.data.email) // Save email
              navigate('/') // Navigate to home page
            }
        } catch (error) {
            console.error(error)
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
          <h1>Register</h1>
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

export default Register
