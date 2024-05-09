import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Profile from '../profile/Profile';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate()
    const inputHandler = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const login = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/login', formData);
            console.log(response);
            navigate(`/profile/${response.data._id}`)

        } catch (error) {
            console.log('Error:', error);
            // Handle login error here
        }
        
    };

    return (
        <div className="loginBox">
            <h2>Login Page</h2>
            <form onSubmit={login}>
                <div className="box">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" value={formData.email} onChange={inputHandler} />
                </div>
                <div className="box">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" value={formData.password} onChange={inputHandler} />
                </div>
                <button type="submit">Login</button>
            </form>
            <div className="jump">
                <span>I don't have an account. <Link to="/create">Register here</Link></span>
            </div>
        </div>
    );
}

export default Login;
