import { ADD_BARRA, REMOVE_BARRA, Barra, AddBarraAction, RemoveBarraAction } from '../types/barrasTyes';

export const addBarra = (barra: Barra): AddBarraAction => ({
  type: ADD_BARRA,
  payload: barra,
});

export const removeBarra = (barraId: string): RemoveBarraAction => ({
  type: REMOVE_BARRA,
  payload: barraId,
});
