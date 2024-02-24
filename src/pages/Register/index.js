import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import './styles.css';

import api from '../../services/api';
import calc_image from '../../assets/calc_image.jpg'
import logoImage from '../../assets/logoImage.svg'

export default function Register() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    async function register(e) {
        e.preventDefault();

        const data = {
            firstName,
            lastName,
            email,
            password,
        };

        try {
            await api.post('api/auth/register', data);
            alert('Conta criada com sucesso! Faça o Login para continuar.')
            navigate('/login')
        } catch (err) {
            alert('Cadastro falhou! Tente novamente.');
        }
    };

    return (
        <div className='register-container'>
            <section className='form'>
            <img src={logoImage} alt='Sabatini Logo'/>
                <form onSubmit={register}>
                    <h1>Crie sua Conta</h1>
                    <input placeholder='Nome' value={firstName} onChange={e => setFirstName(e.target.value)}/>
                    <input placeholder='Sobrenome' value={lastName} onChange={e => setLastName(e.target.value)}/>
                    <input placeholder='E-mail' value={email} onChange={e => setEmail(e.target.value)}/>
                    <input type='password' placeholder='Senha' value={password} onChange={e => setPassword(e.target.value)}/>

                    <button className='button' type='submit'>Registrar</button>
                </form>

            </section>

            <img src={calc_image} alt='Registrar'/>

        </div>
    )
}