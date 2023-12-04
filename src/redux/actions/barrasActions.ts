import { ADD_BARRA, REMOVE_BARRA, Barra, AddBarraAction, RemoveBarraAction } from '../types/barrasTypes';

export const addBarra = (barra: Barra): AddBarraAction => ({
  type: ADD_BARRA,
  payload: barra,
});

export const editBarra = (barra: Barra) => ({
      type: 'EDIT_BARRA',
    payload: barra,
  });

export const removeBarra = (barraId: string): RemoveBarraAction => ({
  type: REMOVE_BARRA,
  payload: barraId,
});
