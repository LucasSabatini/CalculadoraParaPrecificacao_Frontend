import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiPower, FiEdit, FiTrash2 } from "react-icons/fi";

import api from '../../services/api';

import './styles.css';
import logoImage from '../../assets/logoImage.svg'

export default function RawMaterials() {

    const [rawMaterials, setRawMaterials] = useState([]);

    const accessToken = localStorage.getItem('accessToken');
    const firstName = localStorage.getItem('firstName');

    const navigate = useNavigate();
    
    async function logout() {
        localStorage.clear();
        navigate('/');
    }

    async function editRawMaterial(id) {
        try {
            navigate(`/rawmaterials/new/${id}`)
        } catch (err) {
            alert("Falha na atualização! Tente novamente.")
        }
    }

    async function deleteRawMaterial(id) {
        try {
            await api.delete(`api/materiaprima/${id}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });

            setRawMaterials(rawMaterials.filter(rawMaterial => rawMaterial.id !== id))
        } catch (err) {
            alert("Falha ao excluir! Tente novamente.");
        }
    }

    useEffect(() => {
        api.get('api/materiaprima', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }).then(response => {
            setRawMaterials(response.data)
        })
    });

    return (
        <div className="rawMaterial-container">
            <header>
                <img src={logoImage} alt="Sabatini" />
                <span>Bem Vindo, <strong>{firstName.toUpperCase()}</strong>!</span>
                <Link className="button" to="/rawmaterials/new/0">Adicionar Nova Matéria-Prima</Link>
                <button onClick={logout} type="button">
                    <FiPower size={18} color="#246DDA" />
                </button>
            </header>

            <h1>Matérias-Primas Cadastradas</h1>
            <ul>
                {rawMaterials.map(rawMaterial => (
                    <li key={rawMaterial.id}>
                        <strong>Nome:</strong>
                        <p>{rawMaterial.nameRawMaterial}</p>
                        <strong>Preço Pago:</strong>
                        <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(rawMaterial.pricePaid)}</p>
                        <strong>Peso Usado:</strong>
                        <p>{rawMaterial.weightUsedInRecipe}g</p>
                        <strong>Peso Comprado:</strong>
                        <p>{rawMaterial.weightPurchased}g</p>
                        <strong>Custo Final:</strong>
                        <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(rawMaterial.finalCost)}</p>
                        <button onClick={() => editRawMaterial(rawMaterial.id)} type="button">
                            <FiEdit size={20} color="#246DDA" />
                        </button>
                        <button onClick={() => deleteRawMaterial(rawMaterial.id)} type="button">
                            <FiTrash2 size={20} color="#246DDA" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}