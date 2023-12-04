import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Dashboard from '../Dashboard';

const mockState = {
  barras: { barras: [{ id: '1', numero: 1 }] },
  linhas: { linhas: [{ id: '1', barraDe: '1', barraPara: '2', numero: 1 }] },
  geradores: { geradores: [{ id: '1', numero: 1, novoNome: 'Gerador 1' }] },
  transformadores: { transformadores: [{ id: '1', barraDe: '1', barraPara: '2', numero: 1 }] },
};

const mockStore = configureMockStore();
const store = mockStore(mockState);

test('Teste', () => {
  const { getByText } = render(
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );

  expect(getByText('Barras: 1')).toBeInTheDocument();
  expect(getByText('Linhas: 1')).toBeInTheDocument();
  expect(getByText('Geradores: 1')).toBeInTheDocument();
  expect(getByText('Transformadores: 1')).toBeInTheDocument();
});
