const baseURL = 'http://localhost:3001/contatos';

function tratarResposta(resposta) {
  if (!resposta.ok) {
    throw new Error(`Erro na requisição: ${resposta.status} ${resposta.statusText}`);
  }
  return resposta.json();
}

export const apiContatos = {
  resgatarContatos() {
    return fetch(baseURL)
      .then(tratarResposta)
      .catch(() => {
        throw new Error('Erro ao buscar contatos');
      });
  },

  criar(contato) {
    return fetch(baseURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contato),
    })
      .then(tratarResposta)
      .catch(() => {
        throw new Error('Erro ao criar contato');
      });
  },

  atualizar(id, contato) {
    return fetch(`${baseURL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contato),
    })
      .then(tratarResposta)
      .catch(() => {
        throw new Error('Erro ao atualizar contato');
      });
  },

  deletar(id) {
    return fetch(`${baseURL}/${id}`, {
      method: 'DELETE',
    })
      .then(tratarResposta)
      .catch(() => {
        throw new Error('Erro ao deletar contato');
      });
  }
};