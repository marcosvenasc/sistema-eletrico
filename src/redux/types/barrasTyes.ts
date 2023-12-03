export const ADD_BARRA = 'ADD_BARRA';
export const REMOVE_BARRA = 'REMOVE_BARRA';

export interface Barra {
  id: string;
  numero: number;
}

export interface BarrasState {
  barras: Barra[];
}

export interface AddBarraAction {
  type: typeof ADD_BARRA;
  payload: Barra;
}

export interface RemoveBarraAction {
  type: typeof REMOVE_BARRA;
  payload: string;
}

export type BarrasActionTypes = AddBarraAction | RemoveBarraAction;
