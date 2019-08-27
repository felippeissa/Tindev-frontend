import React, { useState } from 'react';
import './Login.css';  
import './Main';
import logo from '../assets/logo.svg';
import api from '../services/api.js';

export default function Login( { history } ) {
    const [username, setUsername] = useState('')   

    async function handleSubmit(event) {
        event.preventDefault();

        const response = await api.post('/devs',{
           username,
        });
        
        const { _id} = response.data;

        history.push(`/dev/${_id}`);
    }

    return(
        <div className="login-container">
            <form onSubmit={handleSubmit}>
            <img src={logo} alt="Tindev"/>
            <input 
                placeholder="Digite seu usuario no gitHub"
                value={username}
                onChange={event => setUsername(event.target.value)}
                />
            <button type="submit">Entrar</button>
            </form>
        </div>
    );
}