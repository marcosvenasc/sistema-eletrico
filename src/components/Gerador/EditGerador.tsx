import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { editGerador } from '../../redux/actions/geradoresActions';
import { Gerador } from '../../redux/types/geradoresTypes';

interface EditGeradorProps {
  geradores: Gerador[];
  geradorId: string;
  editGerador: (gerador: Gerador) => void;
}

const EditGerador: React.FC<EditGeradorProps> = ({ geradores, geradorId, editGerador }) => {
  const [numero, setNumero] = useState<number>(0);

  useEffect(() => {
    const geradorExistente = geradores.find((gerador) => gerador.id === geradorId);

    if (geradorExistente) {
      setNumero(geradorExistente.numero);
    }
  }, [geradores, geradorId]);

  const handleEditGerador = () => {
    const geradorEditada: Gerador = {
      id: geradorId,
      numero: numero,
    };

    editGerador(geradorEditada);
    
  };

  return (
    <div>
      <label>Número:</label>
      <input type="number" value={numero} onChange={(e) => setNumero(Number(e.target.value))} />
      <button onClick={handleEditGerador}>Editar Gerador</button>
    </div>
  );
};

const mapStateToProps = (state: { geradores: Gerador[] }) => ({
  geradores: state.geradores,
});

export default connect(mapStateToProps, { editGerador })(EditGerador);


