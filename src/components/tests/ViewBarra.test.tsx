import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ViewBarra from '../Barra/ViewBarra';

const mockStore = configureStore([]);

test('Verificação ID', () => {
 
  const barra1 = {
    id: '1',
    numero: 8,
   
  };

    const barra2 = {
      id: '11',
      numero: 50,
   
  };

  const initialState = {
    barras: [barra1, barra2],
  };

  const store = mockStore(initialState);

  const { getByText } = render(
    <Provider store={store}>
      <ViewBarra barraId={barra1.id} />
    </Provider>
  );

  expect(getByText(`ID: ${barra1.id}`)).toBeInTheDocument();
  expect(getByText(`Número: ${barra1.numero}`)).toBeInTheDocument();

  const { getByText: getByText2 } = render(
     <Provider store={store}>
       <ViewBarra barraId={barra2.id} />
     </Provider>
   );

   expect(getByText2(`ID: ${barra2.id}`)).toBeInTheDocument();
   expect(getByText2(`Número: ${barra2.numero}`)).toBeInTheDocument();

});

test('Simulação de barra inexistente', () => {
 
  const initialState = {
    barras: [],
  };
  
  const store = mockStore(initialState);

  const { getByText } = render(
    <Provider store={store}>
      <ViewBarra barraId="barra_inexistente" />
    </Provider>
  );

  expect(getByText('Barra não encontrada.')).toBeInTheDocument();
});
