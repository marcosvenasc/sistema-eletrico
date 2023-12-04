import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { editTransformador } from '../../redux/actions/transformadoresActions';
import { Transformador } from '../../redux/types/transformadoresTypes';
import { Barra } from '../../redux/types/barrasTypes';

interface EditTransformadorProps {
  transformadores: Transformador[];
  barras: Barra[];
  transformadorId: string;
  editTransformador: (transformador: Transformador) => void;
}

const EditTransformador: React.FC<EditTransformadorProps> = ({
  transformadores,
  barras,
  transformadorId,
  editTransformador,
}) => {
  const [barraDe, setBarraDe] = useState<string>('');
  const [barraPara, setBarraPara] = useState<string>('');
  const [numero, setNumero] = useState<number>(0);

  useEffect(() => {
    // Carregar os dados do transformador existente para edição
    const transformadorExistente = transformadores.find((t) => t.id === transformadorId);

    if (transformadorExistente) {
      setBarraDe(transformadorExistente.barraDe);
      setBarraPara(transformadorExistente.barraPara);
      setNumero(transformadorExistente.numero);
    }
  }, [transformadores, transformadorId]);

  const handleEditTransformador = () => {
    const transformadorEditado: Transformador = {
      id: transformadorId,
      barraDe: barraDe,
      barraPara: barraPara,
      numero: numero,
    };

    editTransformador(transformadorEditado);
  };

  return (
    <div>
      <label>Barra de Origem:</label>
      <select value={barraDe} onChange={(e) => setBarraDe(e.target.value)}>
        {barras.map((barra) => (
          <option key={barra.id} value={barra.id}>
            {barra.numero}
          </option>
        ))}
      </select>

      <label>Barra de Destino:</label>
      <select value={barraPara} onChange={(e) => setBarraPara(e.target.value)}>
        {barras.map((barra) => (
          <option key={barra.id} value={barra.id}>
            {barra.numero}
          </option>
        ))}
      </select>

      <label>Número:</label>
      <input type="number" value={numero} onChange={(e) => setNumero(Number(e.target.value))} />

      <button onClick={handleEditTransformador}>Editar Transformador</button>
    </div>
  );
};

const mapStateToProps = (state: { transformadores: Transformador[]; barras: Barra[] }) => ({
  transformadores: state.transformadores,
  barras: state.barras,
});

export default connect(mapStateToProps, { editTransformador })(EditTransformador);
