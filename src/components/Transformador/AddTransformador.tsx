import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTransformador } from '../../redux/actions/transformadoresActions';
import { Transformador } from '../../redux/types/transformadoresTypes';

interface AddTransformadorProps {
  addTransformador: (transformador: Transformador) => void;
}

const AddTransformador: React.FC<AddTransformadorProps> = ({ addTransformador }) => {
  const [barraDe, setBarraDe] = useState<string>('');
  const [barraPara, setBarraPara] = useState<string>('');
  const [numero, setNumero] = useState<number>(0);

  const handleAddTransformador = () => {
    

    const novoId = gerarId();

    const novoTransformador: Transformador = {
      id: novoId,
      barraDe: barraDe,
      barraPara: barraPara,
      numero: numero,
    };

    addTransformador(novoTransformador);
    setBarraDe('');
    setBarraPara('');
    setNumero(0);
  };

  return (
    <div>
      <label>Barra de Origem:</label>
      <input type="text" value={barraDe} onChange={(e) => setBarraDe(e.target.value)} />
      <label>Barra de Destino:</label>
      <input type="text" value={barraPara} onChange={(e) => setBarraPara(e.target.value)} />
      <label>Número:</label>
      <input type="number" value={numero} onChange={(e) => setNumero(Number(e.target.value))} />

      <button onClick={handleAddTransformador}>Adicionar Transformador</button>
    </div>
  );
};

export default connect(null, { addTransformador })(AddTransformador);
