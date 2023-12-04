import { ADD_TRANSFORMADOR, REMOVE_TRANSFORMADOR, TransformadorState, TransformadoresActionTypes } from '../types/transformadoresTypes';

const initialState: TransformadorState = {
  transformadores: [],
};

const transformadoresReducer = (state = initialState, action: TransformadoresActionTypes): TransformadorState => {
  switch (action.type) {
    case ADD_TRANSFORMADOR:
      return {
        ...state,
        transformadores: [...state.transformadores, action.payload],
      };
    case REMOVE_TRANSFORMADOR:
      return {
        ...state,
        transformadores: state.transformadores.filter((transformador) => transformador.id !== action.payload),
      };
    default:
      return state;
  }
};

export default transformadoresReducer;
