import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import AddBarra from '../../components/Barra/AddBarra';

const mockStore = configureMockStore();
const store = mockStore({}); 

test('Validação de Add barra.', () => {
  const { getByLabelText, getByText } = render(
    <Provider store={store}>
      <AddBarra />
    </Provider>
  );

  const numeroInput = getByLabelText('Número:');
  const addButton = getByText('Adicionar Barra');

  fireEvent.change(numeroInput, { target: { value: '6' } });

  fireEvent.click(addButton);

  const actions = store.getActions();
  expect(actions).toContainEqual({
    type: 'ADD_BARRA',
    payload: {
      id: expect.any(String), 
      numero: '10',
    },
  });
});
