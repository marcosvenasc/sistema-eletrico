import { ADD_TRANSFORMADOR, REMOVE_TRANSFORMADOR, Transformador, AddTransformadorAction, RemoveTransformadorAction } from '../types/transformadoresType';

export const addTransformador = (transformador: Transformador): AddTransformadorAction => ({
  type: ADD_TRANSFORMADOR,
  payload: transformador,
});

export const removeTransformador = (transfrmadorId: string): RemoveTransformadorAction => ({
  type: REMOVE_TRANSFORMADOR,
  payload: transfrmadorId,
});