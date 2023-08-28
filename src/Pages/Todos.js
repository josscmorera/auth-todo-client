// Todos.js

import React, { useEffect, useState } from 'react';
import { getTodos } from '../Api/api';

function Todos() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchTodos = async () => {
            const data = await getTodos();
            if (data?.success) {
                setTodos(data.data);
            }
        };
        fetchTodos();
    }, []);

    return (
        <div>
            <h1>Todos</h1>
            {todos.map((todo) => (
                <div key={todo._id}>
                    <h2>{todo.title}</h2>
                    <p>{todo.description}</p>
                    <p>Priority: {todo.priority}</p>
                    <p>Status: {todo.completed ? 'Completed' : 'Not Completed'}</p>
                    <p>Last Modified: {new Date(todo.lastModified).toLocaleString()}</p>
                </div>
            ))}
        </div>
    );
}

export default Todos;
