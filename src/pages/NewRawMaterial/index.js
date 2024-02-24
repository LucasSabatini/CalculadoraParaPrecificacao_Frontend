import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImage from '../../assets/logoImage.svg'

export default function NewRawMaterial() {

    const [id, setId] = useState(null);
    const [nameRawMaterial, setNameRawMaterial] = useState('');
    const [pricePaid, setPricePaid] = useState('');
    const [weightUsedInRecipe, setWeightUsedInRecipe] = useState('');
    const [weightPurchased, setWeightPurchased] = useState('');
    const [finalCost, setFinalCost] = useState('');
    const [user_id, setUser_id] = useState('');

    const token = localStorage.getItem('token');

    const navigate = useNavigate();

    async function createNewRawMaterial(e) {
        e.preventDefault();

        const data = {
            nameRawMaterial,
            pricePaid,
            weightUsedInRecipe,
            weightPurchased,
        }

        const header = {
            Authorization: `Bearer ${token}`
        }

        try {
            await api.post('api/materiaprima', data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            navigate('/rawmaterials');
        } catch (err) {
            alert('Erro ao cadastrar Matéria-Prima! Tente novamente.')
        }
    }

    return (
        <div className='newRawMaterial-container'>
            <div className='content'>
                <section className='form'>
                    <img src={logoImage} alt='Sabatini' />
                    <h1>Adicionar Matéria-Prima</h1>
                    <p>Insira os dados da Matéria-Prima e clique em Adicionar</p>
                    <Link className='back-link' to='/rawmaterials'>
                        <FiArrowLeft size={16} color='#246DDA' />
                        <span>Início</span>
                    </Link>
                </section>
                <form onSubmit={createNewRawMaterial}>
                    <input
                        placeholder='Nome'
                        value={nameRawMaterial}
                        onChange={e => setNameRawMaterial(e.target.value)}
                    />
                    <input
                        placeholder='Preço Pago'
                        value={pricePaid}
                        onChange={e => setPricePaid(e.target.value)}
                    />
                    <input
                        placeholder='Peso Usado'
                        value={weightUsedInRecipe}
                        onChange={e => setWeightUsedInRecipe(e.target.value)}
                    />
                    <input
                        placeholder='Peso Comprado'
                        value={weightPurchased}
                        onChange={e => setWeightPurchased(e.target.value)}
                    />

                    <button className='button' type='submit'>Adicionar</button>
                </form>
            </div>
        </div>
    );
}