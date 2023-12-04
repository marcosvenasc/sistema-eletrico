import { ADD_BARRA, EDIT_BARRA, REMOVE_BARRA, Barra, AddBarraAction, EditBarraAction,  RemoveBarraAction } from '../types/barrasTypes';

export const addBarra = (barra: Barra): AddBarraAction => ({
  type: ADD_BARRA,
  payload: barra,
});

export const editBarra = (barra: Barra): EditBarraAction => ({
      type: 'EDIT_BARRA',
    payload: barra,
  });

export const removeBarra = (barraId: string): RemoveBarraAction => ({
  type: REMOVE_BARRA,
  payload: barraId,
});
