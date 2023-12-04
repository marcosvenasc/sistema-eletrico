import React from 'react';
import { connect } from 'react-redux';
import { Barra } from '../../redux/types/barrasTyes';

interface ViewBarraProps {
  barra: Barra | null; 
}

const ViewBarra: React.FC<ViewBarraProps> = ({ barra }) => {
  if (!barra) {
    return <div>Barra não encontrada.</div>;
  }

  return (
    <div>
      <h2>Detalhes da Barra</h2>
      <p>ID: {barra.id}</p>
      <p>Número: {barra.numero}</p>
      {/* Adicione outros detalhes da barra conforme necessário */}
    </div>
  );
};

const mapStateToProps = (state: { barras: Barra[] }, ownProps: { barraId: string }) => {
  const barraId = ownProps.barraId;
  const barra = state.barras.find((b) => b.id === barraId) || null;

  return {
    barra,
  };
};

export default connect(mapStateToProps)(ViewBarra);
