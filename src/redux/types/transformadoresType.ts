export const ADD_TRANSFORMADOR = 'ADD_TRANSFORMADOR';
export const REMOVE_TRANSFORMADOR = 'REMOVE_TRANSFORMADOR';

export interface Transformador {
  id: string;
  numero: number;
}

export interface TransformadorState {
  transformadores: Transformador[];
}

export interface AddTransformadorAction {
  type: typeof ADD_TRANSFORMADOR;
  payload: Transformador;
}

export interface RemoveTransformadorAction {
  type: typeof REMOVE_TRANSFORMADOR;
  payload: string;
}

export type TransformadoresActionTypes = AddTransformadorAction | RemoveTransformadorAction;