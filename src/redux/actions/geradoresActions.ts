import { ADD_GERADOR, REMOVE_GERADOR, EDIT_GERADOR, Gerador, AddGeradorAction, RemoveGeradorAction, EditGeradorAction } from '../types/geradoresTypes';

export const addGerador = (gerador: Gerador): AddGeradorAction => ({
  type: ADD_GERADOR,
  payload: gerador,
});

export const editGerador = (gerador: Gerador) => ({
  type: 'EDIT_GERADOR',
payload: gerador,
});

export const removeGerador = (geradorId: string): RemoveGeradorAction => ({
  type: REMOVE_GERADOR,
  payload: geradorId,
});
