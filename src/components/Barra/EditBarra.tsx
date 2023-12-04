import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { editBarra } from '../../redux/actions/barrasActions';
import { Barra } from '../../redux/types/barrasTyes';

interface EditBarraProps {
  barras: Barra[];
  barraId: string;
  editBarra: (barra: Barra) => void;
}

const EditBarra: React.FC<EditBarraProps> = ({ barras, barraId, editBarra }) => {
  const [numero, setNumero] = useState<number>(0);

  useEffect(() => {
    const barraExistente = barras.find((barra) => barra.id === barraId);

    if (barraExistente) {
      setNumero(barraExistente.numero);
    }
  }, [barras, barraId]);

  const handleEditBarra = () => {
    const barraEditada: Barra = {
      id: barraId,
      numero: numero,
    };

    editBarra(barraEditada);
    
  };

  return (
    <div>
      <label>Número:</label>
      <input type="number" value={numero} onChange={(e) => setNumero(Number(e.target.value))} />
      <button onClick={handleEditBarra}>Editar Barra</button>
    </div>
  );
};

const mapStateToProps = (state: { barras: Barra[] }) => ({
  barras: state.barras,
});

export default connect(mapStateToProps, { editBarra })(EditBarra);


