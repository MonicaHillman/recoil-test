import React from 'react';
import addIcon from '../../assets/icon.svg';

function BotaoAdicionar ({ onClick })  {
    return (
        <button className="add__contato" onClick={onClick}>
            <img src={addIcon} alt="Add" />
            Criar novo contato
        </button>
    );
};

export default BotaoAdicionar;