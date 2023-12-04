export const ADD_GERADOR = 'ADD_GERADOR';
export const EDIT_GERADOR = 'EDIT_GERADOR';
export const REMOVE_GERADOR = 'REMOVE_GERADOR';

export interface Gerador {
  id: string;
  numero: number;
  novoNome: string;
}

export interface GeradoresState {
  geradores: Gerador[];
}

export interface AddGeradorAction {
  type: typeof ADD_GERADOR;
  payload: Gerador;
}

export interface EditGeradorAction {
  type: typeof EDIT_GERADOR;
  payload: {
    geradorId: string;
    novoNome: string;
  }};

export interface RemoveGeradorAction {
  type: typeof REMOVE_GERADOR;
  payload: string;
}


export type GeradoresAction = AddGeradorAction | EditGeradorAction | RemoveGeradorAction ;
