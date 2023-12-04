import { ADD_LINHA, REMOVE_LINHA, EDIT_LINHA, Linha, AddLinhaAction, RemoveLinhaAction, EditLinhaAction } from '../types/linhasTypes';

export const addLinha = (linha: Linha): AddLinhaAction => ({
  type: ADD_LINHA,
  payload: linha,
});

export const editLinha = (linha: Linha): EditLinhaAction => ({
  type: EDIT_LINHA,
  payload: linha,
});

export const removeLinha = (linhaId: string): RemoveLinhaAction => ({
  type: REMOVE_LINHA,
  payload: linhaId,
});
