import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { editLinha } from '../../redux/actions/linhasActions';
import { Linha } from '../../redux/types/linhasTypes';
import { Barra } from '../../redux/types/barrasTypes';


interface EditLinhaProps {
  linhas: Linha[];
  linhaId: string;
  editLinha: (linha: Linha) => void;
}

const EditLinha: React.FC<EditLinhaProps> = ({ linhas, linhaId, editLinha }) => {
  const [numero, setNumero] = useState<number>(0);

  useEffect(() => {
    const linhaExistente = linhas.find((linha) => linha.id === linhaId);

    if (linhaExistente) {
      setNumero(linhaExistente.numero);
    }
  }, [linhas, linhaId]);

  const handleEditLinha = (barras: Barra[], linhaId: string, numero: number) => {
    const linhaEditada: Linha = {
      id: linhaId,
      barraDe: barras[0] as barraDe,  
      barraPara: barras[1] as barraPara,  
      numero: numero,
    };

    editLinha(linhaEditada);
    
  };

  return (
    <div>
      <label>Número:</label>
      <input type="number" value={numero} onChange={(e) => setNumero(Number(e.target.value))} />
      <button onClick={handleEditLinha}>Editar Linha</button>
    </div>
  );
};

const mapStateToProps = (state: { linhas: Linha[] }) => ({
  linhas: state.linhas,
});

export default connect(mapStateToProps, { editLinha })(EditLinha);


