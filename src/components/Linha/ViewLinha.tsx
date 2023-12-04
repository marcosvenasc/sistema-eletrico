import React from 'react';
import { connect } from 'react-redux';
import { Gerador } from '../../redux/types/geradoresTypes';

interface ViewGeradorProps {
  gerador: Gerador | null; 
}

const ViewGerador: React.FC<ViewGeradorProps> = ({ gerador }) => {
  if (!gerador) {
    return <div>Gerador não encontrada.</div>;
  }

  return (
    <div>
      <h2>Detalhes do Gerador</h2>
      <p>ID: {gerador.id}</p>
      <p>Número: {gerador.numero}</p>
    </div>
  );
};

const mapStateToProps = (state: { geradores: Gerador[] }, ownProps: { geradorId: string }) => {
  const geradorId = ownProps.geradorId;
  const gerador = (state.geradores || []).find((g) => g.id === geradorId) || null;
  console.log('Gerador:', gerador);

  return {
    gerador,
  };
};

export default connect(mapStateToProps)(ViewGerador);