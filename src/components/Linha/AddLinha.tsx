import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addLinha } from '../../redux/actions/linhasActions';
import { Linha } from '../../redux/types/linhasTypes';
import barrasReducer from '../../redux/reducers/barrasReducers';

interface AddLinhaProps {
  linhas : Linha[]; 
  addLinha: (linha: Linha) => void;
}

const AddLinha: React.FC<AddLinhaProps> = ({ linhas, addLinha }) => {
    const [barras, setBarras] = useState<string[]>(['', '']);
    const [numero, setNumero] = useState<number>(0);

  const gerarId = (): string => {
    let novoId: string;
    do {
      novoId = String(Math.floor(Math.random() * 100) + 1);
    } while (linhas.some((linha) => linha.id === novoId));

    return novoId;
  };

  const handleAddLinha = () => {
    const novoId = gerarId();
    const novaLinha: Linha = {
      id: novoId,
      barraDe: barras[0] as barraDe,
      barraPara: barras[1] as barraPara,
      numero: numero,
    };

    addLinha(novaLinha);
    setBarraDe('');
    setBarraPara('');
    setNumero(0);
    
  };

  return (
    <div>
      <label>Barra de:</label>
      <input type="text" value={barraDe} onChange={(e) => setBarraDe(e.target.value)} />
      <label>Barra para:</label>
      <input type="text" value={barraPara} onChange={(e) => setBarraPara(e.target.value)} />
      <label>Número:</label>
      <input type="number" value={numero} onChange={(e) => setNumero(Number(e.target.value))} />
      <button onClick={handleAddLinha}>Adicionar Linha</button>
    </div>
  );
};

const mapStateToProps = (state: { linhas: Linha[] }) => ({
  linhas: state.linhas,
});

export default connect(mapStateToProps, { addLinha })(AddLinha);