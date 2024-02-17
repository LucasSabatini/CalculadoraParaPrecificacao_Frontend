import React from 'react';
import './styles.css';

import calc_image from '../../assets/calc_image.jpg'
import logoImage from '../../assets/logoImage.svg'

export default function Login() {
    return (
        <div className="login-container">
            <section className="form">
                <img src={logoImage} alt='Sabatini Logo'/>
                <form>
                    <h1>Acesse sua Conta</h1>
                    <input placeholder='E-mail'/>
                    <input type='password' placeholder='Senha'/>

                    <button className='button' type='submit'>Login</button>
                </form>

            </section>

            <img src={calc_image} alt='Login'/>

        </div>
    )
}