import { ADD_GERADOR, REMOVE_GERADOR, EDIT_GERADOR, Gerador, AddGeradorAction, EditGeradorAction, RemoveGeradorAction } from '../types/geradoresTypes';

export const addGerador = (gerador: Gerador): AddGeradorAction => ({
  type: ADD_GERADOR,
  payload: gerador,
});

export const editGerador = (gerador: Gerador): EditGeradorAction => ({
  type: 'EDIT_GERADOR',
  payload: {
    geradorId: gerador.id,
    novoNome: gerador.novoNome,
  }});

export const removeGerador = (geradorId: string): RemoveGeradorAction => ({
  type: REMOVE_GERADOR,
  payload: geradorId,
});
