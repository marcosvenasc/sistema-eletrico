import { Barra } from "./barrasTypes";

export const ADD_LINHA = 'ADD_LINHA';
export const REMOVE_LINHA = 'REMOVE_LINHA';

export interface Linha {
  id: string;
  barraDe: Barra,
  barraPara: Barra,
  numero: number;
}

export interface LinhasState {
  linhas: Linha[];
}

export interface AddLinhaAction {
  type: typeof ADD_LINHA;
  payload: Linha;
}

export interface RemoveLinhaAction {
  type: typeof REMOVE_LINHA;
  payload: string;
}

export type LinhasActionTypes = AddLinhaAction | RemoveLinhaAction;