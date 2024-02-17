import React from "react";
import { Link } from "react-router-dom";
import { FiPower, FiEdit, FiTrash2 } from "react-icons/fi";

import './styles.css';

import logoImage from '../../assets/logoImage.svg'

export default function RawMaterials() {
    return (
        <div className="rawMaterial-container">
            <header>
                <img src={logoImage} alt="Sabatini"/>
                <span>Bem Vindo, <strong>Lucas</strong>!</span>
                <Link className="button" to="/rawmaterials/new">Adicionar Nova Matéria-Prima</Link>
                <button type="button">
                    <FiPower size={18} color="#246DDA"/>
                </button>
            </header>

            <h1>Matérias-Primas Cadastradas</h1>
            <ul>
                <li>
                    <strong>Nome:</strong>
                    <p>Óxido de Zinco</p>
                    <strong>Preço Pago:</strong>
                    <p>R$250,00</p>
                    <strong>Peso Usado:</strong>
                    <p>250g</p>
                    <strong>Peso Comprado:</strong>
                    <p>1000g</p>
                    <strong>Custo Final:</strong>
                    <p>R$62,50</p>

                    <button type="button">
                        <FiEdit size={20} color="#246DDA"/>
                    </button>

                    <button type="button">
                        <FiTrash2 size={20} color="#246DDA"/>
                    </button>
                </li>
                <li>
                    <strong>Nome:</strong>
                    <p>Óxido de Zinco</p>
                    <strong>Preço Pago:</strong>
                    <p>R$250,00</p>
                    <strong>Peso Usado:</strong>
                    <p>250g</p>
                    <strong>Peso Comprado:</strong>
                    <p>1000g</p>
                    <strong>Custo Final:</strong>
                    <p>R$62,50</p>

                    <button type="button">
                        <FiEdit size={20} color="#246DDA"/>
                    </button>

                    <button type="button">
                        <FiTrash2 size={20} color="#246DDA"/>
                    </button>
                </li>
                <li>
                    <strong>Nome:</strong>
                    <p>Óxido de Zinco</p>
                    <strong>Preço Pago:</strong>
                    <p>R$250,00</p>
                    <strong>Peso Usado:</strong>
                    <p>250g</p>
                    <strong>Peso Comprado:</strong>
                    <p>1000g</p>
                    <strong>Custo Final:</strong>
                    <p>R$62,50</p>

                    <button type="button">
                        <FiEdit size={20} color="#246DDA"/>
                    </button>

                    <button type="button">
                        <FiTrash2 size={20} color="#246DDA"/>
                    </button>
                </li>
                <li>
                    <strong>Nome:</strong>
                    <p>Óxido de Zinco</p>
                    <strong>Preço Pago:</strong>
                    <p>R$250,00</p>
                    <strong>Peso Usado:</strong>
                    <p>250g</p>
                    <strong>Peso Comprado:</strong>
                    <p>1000g</p>
                    <strong>Custo Final:</strong>
                    <p>R$62,50</p>

                    <button type="button">
                        <FiEdit size={20} color="#246DDA"/>
                    </button>

                    <button type="button">
                        <FiTrash2 size={20} color="#246DDA"/>
                    </button>
                </li>
            </ul>
        </div>
    );
}