import { ADD_LINHA, REMOVE_LINHA, Linha, AddLinhaAction, RemoveLinhaAction } from '../types/linhasTypes';

export const addLinha = (linha: Linha): AddLinhaAction => ({
  type: ADD_LINHA,
  payload: linha,
});

export const removeLinha = (linhaId: string): RemoveLinhaAction => ({
  type: REMOVE_LINHA,
  payload: linhaId,
});