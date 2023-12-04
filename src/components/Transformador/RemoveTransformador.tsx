import React, { useState } from 'react';
import { connect } from 'react-redux';
import { removeTransformador } from '../../redux/actions/transformadoresActions';
import { Transformador } from '../../redux/types/transformadoresTypes';

interface RemoveTransformadorProps {
  transformadores: Transformador[];
  removeTransformador: (transformadorId: string) => void;
}

const RemoveTransformador: React.FC<RemoveTransformadorProps> = ({ transformadores, removeTransformador }) => {
  const [transformadorId, setTransformadorId] = useState<string>('');

  const handleRemoveTransformador = () => {
    removeTransformador(transformadorId);
  };

  return (
    <div>
      <label>Transformador a ser Removido:</label>
      <input type="text" value={transformadorId} onChange={(e) => setTransformadorId(e.target.value)} />
      <button onClick={handleRemoveTransformador}>Remover Transformador</button>
    </div>
  );
};

const mapStateToProps = (state: { transformadores: Transformador[] }) => ({
  transformadores: state.transformadores,
});

export default connect(mapStateToProps, { removeTransformador })(RemoveTransformador);
