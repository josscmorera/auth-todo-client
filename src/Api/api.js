import axios from 'axios';
const baseUrl = process.env.REACT_APP_BASE_URL;

const register = async (userData) => {
    try {
        const response = await axios.post(`${baseUrl}/users/register`, userData);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

const login = async (userData) => {
    try {
        const response = await axios.post(`${baseUrl}/users/login`, userData);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

const validateUser = async (token) => {
    try {
        const response = await axios.get(`${baseUrl}/users/validate`, {
            headers: { 
                'Authorization': `Bearer ${token}`
            }
        })
        return response.data
    } catch (error) {
        console.error(error)
    }
}

const getUserToken = () => {
    return localStorage.getItem('token');
}

const getUserEmail = () => {
    return localStorage.getItem('email');
}

const removeUserToken = () => {
    // Clear user data from local storage
    localStorage.removeItem('token');
    localStorage.removeItem('email');
  }
  

const getTodos = async () => {
    const token = localStorage.getItem('token')
    try {
        const response = await axios.get(`${baseUrl}/todos/all-todos`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error("Failed to fetch todos:", error);
        return null;
    }
}

export { register, login, validateUser, getUserToken, getUserEmail, removeUserToken, getTodos }
