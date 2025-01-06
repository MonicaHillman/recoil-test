import React, { useState, useEffect } from "react";
import ItemDaLista from "../ItemDaLista/ItemDaLista";
import "./ListaDeContatos.css";

function ListaDeContatos({ contatosIniciais }) {
  const [contatosAgrupados, setContatosAgrupados] = useState({});

  useEffect(() => {
    const agrupados = contatosIniciais.reduce((acumulador, contato) => {
      const primeiraLetra = contato.nome[0].toUpperCase(); 
      if (!acumulador[primeiraLetra]) acumulador[primeiraLetra] = [];
      acumulador[primeiraLetra].push(contato);
      return acumulador;
    }, {});


    const agrupadosOrdenados = Object.keys(agrupados)
      .sort() 
      .reduce((acumulador, chave) => {
        acumulador[chave] = agrupados[chave].sort((a, b) =>
          a.nome.localeCompare(b.nome)
        ); 
        return acumulador;
      }, {});

    setContatosAgrupados(agrupadosOrdenados);
  }, [contatosIniciais]);

  return (
    <div className="contatos">
      {Object.keys(contatosAgrupados).length > 0 ? (
        Object.keys(contatosAgrupados).map((letra) => (
          <div key={letra} className="contatos__grupo">
            <h2 className="contatos__titulo">{letra}</h2>
            <ul className="contatos__lista">
              {contatosAgrupados[letra].map((contato) => (
                <ItemDaLista
                  key={contato._id}
                  id={contato._id}
                  nome={contato.nome}
                  telefone={contato.telefone}
                  imagem={contato.imagem}
                />
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p>Nenhum contato disponível.</p>
      )}
    </div>
  );
}

export default ListaDeContatos;
