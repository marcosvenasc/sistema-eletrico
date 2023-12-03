import { ADD_GERADOR, REMOVE_GERADOR, Gerador, AddGeradorAction, RemoveGeradorAction } from '../types/geradoresTypes';

export const addGerador = (gerador: Gerador): AddGeradorAction => ({
  type: ADD_GERADOR,
  payload: gerador,
});

export const removeGerador = (geradorId: string): RemoveGeradorAction => ({
  type: REMOVE_GERADOR,
  payload: geradorId,
});
