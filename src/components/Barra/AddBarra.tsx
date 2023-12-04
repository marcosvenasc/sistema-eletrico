import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addBarra } from '../../redux/actions/barrasActions';
import { Barra } from '../../redux/types/barrasTyes';

interface AddBarraProps {
  barras: Barra[]; 
  addBarra: (barra: Barra) => void;
}

const AddBarra: React.FC<AddBarraProps> = ({ barras, addBarra }) => {
  const [numero, setNumero] = useState<number>(0);

  const gerarId = (): string => {
    let novoId: string;
    do {
      novoId = String(Math.floor(Math.random() * 100) + 1);
    } while (barras.some((barra) => barra.id === novoId));

    return novoId;
  };

  const handleAddBarra = () => {
    const novoId = gerarId();

    const novaBarra: Barra = {
      id: novoId,
      numero: numero,
    };

    addBarra(novaBarra);
    
  };

  return (
    <div>
      <label>Número:</label>
      <input id="numeroInput" type="number" value={numero} onChange={(e) => setNumero(Number(e.target.value))} />
      <button onClick={handleAddBarra}>Adicionar Barra</button>
    </div>
  );
};

const mapStateToProps = (state: { barras: Barra[] }) => ({
  barras: state.barras,
});

export default connect(mapStateToProps, { addBarra })(AddBarra);
