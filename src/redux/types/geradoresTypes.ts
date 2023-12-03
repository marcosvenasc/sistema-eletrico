export const ADD_GERADOR = 'ADD_GERADOR';
export const REMOVE_GERADOR = 'REMOVE_GERADOR';

export interface Gerador {
  id: string;
  numero: number;
}

export interface GeradoresState {
  geradores: Gerador[];
}

export interface AddGeradorAction {
  type: typeof ADD_GERADOR;
  payload: Gerador;
}

export interface RemoveGeradorAction {
  type: typeof REMOVE_GERADOR;
  payload: string;
}

export type GeradoresActionTypes = AddGeradorAction | RemoveGeradorAction;
