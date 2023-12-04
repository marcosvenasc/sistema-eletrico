import React, { useState } from 'react';
import { connect } from 'react-redux';
import { removeBarra } from '../../redux/actions/barrasActions';
import { Barra } from '../../redux/types/barrasTyes';

interface RemoveBarraProps {
  barras: Barra[];
  removeBarra: (barraId: string) => void;
}

const RemoveBarra: React.FC<RemoveBarraProps> = ({ barras, removeBarra }) => {
  const [barraId, setBarraId] = useState<string>('');

  const handleRemoveBarra = () => {
    
    removeBarra(barraId);
   
  };

  return (
    <div>
      <label>ID da Barra a ser Removida:</label>
      <input type="text" value={barraId} onChange={(e) => setBarraId(e.target.value)} />
      <button onClick={handleRemoveBarra}>Remover Barra</button>
    </div>
  );
};

const mapStateToProps = (state: { barras: Barra[] }) => ({
  barras: state.barras,
});

export default connect(mapStateToProps, { removeBarra })(RemoveBarra);
