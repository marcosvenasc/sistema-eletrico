import React from 'react';
import { connect } from 'react-redux';
import { Transformador } from '../../redux/types/transformadoresTypes';

interface ViewTransformadorProps {
  transformador: Transformador | null;
}

const ViewTransformador: React.FC<ViewTransformadorProps> = ({ transformador }) => {
  if (!transformador) {
    return <div>Transformador não encontrado.</div>;
  }

  return (
    <div>
      <h2>Detalhes do Transformador</h2>
      <p>ID: {transformador.id}</p>
      <p>Barra de Origem: {transformador.barraDe}</p>
      <p>Barra de Destino: {transformador.barraPara}</p>
      <p>Número: {transformador.numero}</p>
    </div>
  );
};

const mapStateToProps = (state: { transformadores: Transformador[] }, ownProps: { transformadorId: string }) => {
  const transformadorId = ownProps.transformadorId;
  const transformador = state.transformadores.find((t) => t.id === transformadorId) || null;

  return {
    transformador,
  };
};

export default connect(mapStateToProps)(ViewTransformador);
