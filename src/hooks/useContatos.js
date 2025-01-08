import { useRecoilState } from "recoil";
import { contatosState } from "../atoms/contatosAtom";
import { apiContatos } from "../api/api.js";
import { useEffect } from "react";

export function useContatos() {
  const [contatos, setContatos] = useRecoilState(contatosState);

  const fetchContatos = async () => {
    return apiContatos.resgatarContatos().then((data) => {
      setContatos(data);
    });
  };

  const addContatos = async (contato) => {
    return apiContatos.criar(contato).then((novoContato) => {
      setContatos((prev) => [...prev, novoContato]);
      return novoContato;
    });
  };

  const updateContato = async (id, data) => {
    return apiContatos.atualizar(id, data).then((contatoAtualizado) => {
      setContatos((prev) =>
        prev.map((contato) =>
          contato._id === id ? contatoAtualizado : contato
        )
      );
      return contatoAtualizado;
    });
  };

  const deleteContato = async (id) => {
    return apiContatos.deletar(id).then(() => {
      setContatos((prev) => prev.filter((contato) => contato._id !== id));
    });
  };


  useEffect(() => {
    fetchContatos();
  }, []); 

  return {
    contatos,
    fetchContatos,
    addContatos,
    updateContato,
    deleteContato,
  };
}
