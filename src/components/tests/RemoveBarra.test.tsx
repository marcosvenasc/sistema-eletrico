// Em RemoveBarra.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import RemoveBarra from '../../components/Barra/RemoveBarra'; 

describe('Remove Barra', () => {
  const mockStore = configureStore();
  let store: any;

  beforeEach(() => {
      store = mockStore({
      barras: [
        { id: '11', numero: 1 },
        { id: '6', numero: 2 },
      ],
    });
  });

  test('Remove Barra ', () => {
    const { getByText } = render(
      <Provider store={store}>
        <RemoveBarra />
      </Provider>
    );
    
    fireEvent.click(getByText('Remover Barra'));

    const actions = store.getActions();
    expect(actions).toHaveLength(1);
    expect(actions[0].type).toEqual('REMOVE_BARRA');  
    
    const updatedState = store.getState();
    expect(updatedState.barras).toHaveLength(1);
    expect(updatedState.barras[0].id).toEqual('11');
  });
});
