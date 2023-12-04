import React from 'react';
import { connect } from 'react-redux';
import { BarrasState } from '../redux/types/barrasTypes';
import { LinhasState } from '../redux/types/linhasTypes';
import { GeradoresState } from '../redux/types/geradoresTypes';
import { TransformadoresState } from '../redux/types/transformadoresTypes';

interface DashboardProps {
  barras: BarrasState;
  linhas: LinhasState;
  geradores: GeradoresState;
  transformadores: TransformadoresState;
}

const Dashboard: React.FC<DashboardProps> = ({ barras, linhas, geradores, transformadores }) => {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Barras: {barras.barras.length}</p>
      <p>Linhas: {linhas.linhas.length}</p>
      <p>Geradores: {geradores.geradores.length}</p>
      <p>Transformadores: {transformadores.transformadores.length}</p>
    </div>
  );
};

const mapStateToProps = (state: {
  barras: BarrasState;
  linhas: LinhasState;
  geradores: GeradoresState;
  transformadores: TransformadoresState;
}) => ({
  barras: state.barras,
  linhas: state.linhas,
  geradores: state.geradores,
  transformadores: state.transformadores,
});

export default connect(mapStateToProps)(Dashboard);
