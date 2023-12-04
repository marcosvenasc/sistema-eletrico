import React, { useState } from 'react';
import { connect } from 'react-redux';
import { removeGerador } from '../../redux/actions/geradoresActions';
import { Gerador } from '../../redux/types/geradoresTypes';

interface RemoveGeradorProps {
  geradores: Gerador[];
  removeGerador: (geradorId: string) => void;
}

const RemoveGerador: React.FC<RemoveGeradorProps> = ({ geradores, removeGerador }) => {
  const [geradorId, setGeradorId] = useState<string>('');

  const handleRemoveGerador = () => {
    removeGerador(geradorId);
  };

  return (
    <div>
      <label>ID do Gerador a ser Removido:</label>
      <input type="text" value={geradorId} onChange={(e) => setGeradorId(e.target.value)} />
      <button onClick={handleRemoveGerador}>Remover Gerador</button>
    </div>
  );
};

const mapStateToProps = (state: { geradores: Gerador[] }) => ({
  geradores: state.geradores,
});

export default connect(mapStateToProps, { removeGerador })(RemoveGerador);
