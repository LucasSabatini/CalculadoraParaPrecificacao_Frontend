import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import './styles.css';

import logoImage from '../../assets/logoImage.svg'

export default function NewRawMaterial() {
    return (
        <div className="newRawMaterial-container">
            <div className="content">
                <section className="form">
                    <img src={logoImage} alt="Sabatini"/>
                    <h1>Adicionar Matéria-Prima</h1>
                    <p>Insira os dados da Matéria-Prima e clique em Adicionar</p>
                    <Link className="back-link" to="/rawmaterials">
                        <FiArrowLeft size={16} color="#246DDA"/>
                        <span>Início</span>
                    </Link>
                </section>
                <form>
                    <input placeholder="Nome" />
                    <input placeholder="Preço Pago" />
                    <input placeholder="Peso Usado" />
                    <input placeholder="Peso Comprado" />

                    <button className="button" type="submit">Adicionar</button>
                </form>
            </div>
        </div>
    );
}