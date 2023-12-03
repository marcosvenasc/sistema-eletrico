import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addBarra } from '../../redux/actions/barrasActions';
import { Barra } from '../../redux/types/barrasTyes';

interface AddBarraProps {
  addBarra: (barra: Barra) => void;
}

const gerarId = (idsExistentes: Set<string>) => {
  let novoId: string;
  do {
    novoId = String(Math.floor(Math.random() * 100) + 1);
  } while (idsExistentes.has(novoId));

  return novoId;
};

const AddBarra: React.FC<AddBarraProps> = ({ addBarra }) => {
  const [numero, setNumero] = useState<number>(0);

  const handleAddBarra = () => {

    const idsExistentes = new Set<string>(); 

    const novoId = gerarId(idsExistentes);

    const novaBarra: Barra = {
      id: novoId,
      numero: numero,
    };

    addBarra(novaBarra);
   
  };

  return (
    
  );
};

export default connect(null, { addBarra })(AddBarra);
