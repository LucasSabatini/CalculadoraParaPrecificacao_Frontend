import React from 'react';
import './styles.css';

import calc_image from '../../assets/calc_image.jpg'
import logoImage from '../../assets/logoImage.svg'

export default function Register() {
    return (
        <div className="register-container">
            <section className="form">
            <img src={logoImage} alt='Sabatini Logo'/>
                <form>
                    <h1>Crie sua Conta</h1>
                    <input placeholder='Nome'/>
                    <input placeholder='Sobrenome'/>
                    <input placeholder='E-mail'/>
                    <input type='password' placeholder='Senha'/>

                    <button className='button' type='submit'>Registrar</button>
                </form>

            </section>

            <img src={calc_image} alt='Register'/>

        </div>
    )
}