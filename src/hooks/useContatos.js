import { useRecoilState } from 'recoil';
import { contatosState } from '../atoms/contatosAtom';
import { apiContatos } from '../api/api.js';

export function useContatos() {
  const [contatos, setContatos] = useRecoilState(contatosState);

  const fetchContatos = () => {
    return apiContatos.resgatarContatos()
      .then(data => {
        setContatos(data);
      });
  };

  const addContatos = (contato) => {
    return apiContatos.criar(contato)
      .then(novoContato => {
        setContatos(prev => [...prev, novoContato]);
        return novoContato;
      });
  };

  const updateContato = (id, data) => {
    return apiContatos.atualizar(id, data)
      .then(contatoAtualizado => {
        setContatos(prev => prev.map(contato => 
          contato._id === id ? contatoAtualizado : contato
        ));
        return contatoAtualizado;
      });
  };

  const deleteContato = (id) => {
    return apiContatos.deletar(id)
      .then(() => {
        setContatos(prev => prev.filter(contato => contato._id !== id));
      });
  };

  return {
    contatos,
    fetchContatos,
    addContatos,
    updateContato,
    deleteContato
  };
}