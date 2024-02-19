import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import './styles.css';

import api from '../../services/api';
import calc_image from '../../assets/calc_image.jpg'
import logoImage from '../../assets/logoImage.svg'

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const routeChange = () => {
        const path = '/register';
        navigate(path);
    };

    async function login(e) {
        e.preventDefault();

        const data = {
            email,
            password,
        };

        try {
            const response = await api.post('api/auth/authenticate', data);

            localStorage.setItem('token', response.data.token)
            navigate('/rawmaterials')
        } catch (err) {
            alert('Login falhou! Tente novamente.');
        }
    };

    return (
        <div className="login-container">
            <section className="form">
                <img src={logoImage} alt='Sabatini Logo'/>
                <form onSubmit={login}>
                    <h1>Acesse sua Conta</h1>
                    <input placeholder='E-mail' value={email} onChange={e => setEmail(e.target.value)}/>
                    <input type='password' placeholder='Senha' value={password} onChange={e => setPassword(e.target.value)}/>
                    <button className='button' type='submit'>Entrar</button>
                </form>
                
                <h1>Não tem uma Conta?</h1>
                <button className='button' type='submit' onClick={routeChange}>Registrar</button>

            </section>

            <img src={calc_image} alt='Entrar'/>

        </div>
    )
}