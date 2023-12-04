import React, { useState } from 'react';
import { connect } from 'react-redux';
import { removeLinha } from '../../redux/actions/linhasActions';
import { Linha } from '../../redux/types/linhasTypes';

interface RemoveLinhaProps {
  linhas: Linha[];
  removeLinha: (linhaId: string) => void;
}

const RemoveLinha: React.FC<RemoveLinhaProps> = ({ linhas, removeLinha }) => {
  const [linhaId, setLinhaId] = useState<string>('');

  const handleRemoveLinha = () => {
    removeLinha(linhaId);
  };

  return (
    <div>
      <label>Linha a ser Removida:</label>
      <input type="text" value={linhaId} onChange={(e) => setLinhaId(e.target.value)} />
      <button onClick={handleRemoveLinha}>Remover Linha</button>
    </div>
  );
};

const mapStateToProps = (state: { linhas: Linha[] }) => ({
  linhas: state.linhas,
});

export default connect(mapStateToProps, { removeLinha })(RemoveLinha);
