import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addGerador } from '../../redux/actions/geradoresActions';
import { Gerador } from '../../redux/types/geradoresTypes';

interface AddGeradorProps {
  geradores : Gerador[]; 
  addGerador: (gerador: Gerador) => void;
}

const AddGerador: React.FC<AddGeradorProps> = ({ geradores, addGerador }) => {
  const [numero, setNumero] = useState<number>(0);

  const gerarId = (): string => {
    let novoId: string;
    do {
      novoId = String(Math.floor(Math.random() * 100) + 1);
    } while (geradores.some((gerador) => gerador.id === novoId));

    return novoId;
  };

  const handleAddGerador = () => {
    const novoId = gerarId();
    const novoGerador: Gerador = {
      id: novoId,
      numero: numero,
    };

    addGerador(novoGerador);
    
  };

  return (
    <div>
      <label>Número:</label>
      <input id="numeroInput" type="number" value={numero} onChange={(e) => setNumero(Number(e.target.value))} />
      <button onClick={handleAddGerador}>Adicionar Gerador</button>
    </div>
  );
};

const mapStateToProps = (state: { geradores: Gerador[] }) => ({
  geradores: state.geradores,
});

export default connect(mapStateToProps, { addGerador })(AddGerador);