import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
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

    const {rawMaterialId} = useParams();

    const accessToken = localStorage.getItem('accessToken');

    const navigate = useNavigate();

    async function loadRawMaterial() {
        try {
            const response = await api.get(`api/materiaprima/${rawMaterialId}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })

            setId(response.data.id);
            setNameRawMaterial(response.data.nameRawMaterial);
            setPricePaid(response.data.pricePaid);
            setWeightUsedInRecipe(response.data.weightUsedInRecipe);
            setWeightPurchased(response.data.weightPurchased);
            setFinalCost(response.data.finalCost);

        } catch (err) {
            alert('Erro ao carregar Matéria-Prima! Tente novamente.');
            navigate('/rawmaterials');
        }
    }
    
    useEffect(() => {
        if(rawMaterialId === '0') return;
        else loadRawMaterial();
    }, [rawMaterialId]);

    async function saveOrUpdate(e) {
        e.preventDefault();

        const data = {
            nameRawMaterial,
            pricePaid,
            weightUsedInRecipe,
            weightPurchased,
        }

        try {
            if (rawMaterialId === '0') {
                await api.post('api/materiaprima', data, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                });
            } else {
                data.id = rawMaterialId;
                await api.put(`api/materiaprima/${id}`, data, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                });
            }
            
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
                    <h1>{rawMaterialId === '0' ? 'Adicionar Matéria-Prima' : 'Atualizar Matéria-Prima'}</h1>
                    <p>Insira os dados da Matéria-Prima e clique em {rawMaterialId === '0' ? "'Adicionar'" : "'Atualizar'"}</p>
                    <Link className='back-link' to='/rawmaterials'>
                        <FiArrowLeft size={16} color='#246DDA' />
                        <span>Voltar ao Início</span>
                    </Link>
                </section>
                <form onSubmit={saveOrUpdate}>
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

                    <button className='button' type='submit'>{rawMaterialId === '0' ? 'Adicionar' : 'Atualizar'}</button>
                </form>
            </div>
        </div>
    );
}