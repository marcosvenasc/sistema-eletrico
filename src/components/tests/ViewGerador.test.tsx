import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ViewGerador from '../Gerador/ViewGerador';

const mockStore = configureStore([]);

test('Verificação ID', () => {
 
  const gerador1 = {
    id: '1',
    numero: 8,
   
  };

    const gerador2 = {
      id: '11',
      numero: 50,
   
  };

  const initialState = {
    barras: [gerador1, gerador2],
  };

  const store = mockStore(initialState);

  const { getByText } = render(
    <Provider store={store}>
      <ViewGerador geradorId={gerador1.id} />
    </Provider>
  );

  expect(getByText(`ID: ${gerador1.id}`)).toBeInTheDocument();
  expect(getByText(`Número: ${gerador1.numero}`)).toBeInTheDocument();
  console.log('Gerador:', gerador2);

  const { getByText: getByText2 } = render(
     <Provider store={store}>
       <ViewGerador geradorId={gerador2.id} />
     </Provider>
   );

   expect(getByText2(`ID: ${gerador2.id}`)).toBeInTheDocument();
   expect(getByText2(`Número: ${gerador2.numero}`)).toBeInTheDocument();

});

test('Gerador inexistente', () => {
 
  const initialState = {
    gerador: [],
  };
  
  const store = mockStore(initialState);

  const { getByText } = render(
    <Provider store={store}>
      <ViewGerador geradorId="Gerador_inexistente" />
    </Provider>
  );

  expect(getByText('Gerador não encontrado.')).toBeInTheDocument();
});
