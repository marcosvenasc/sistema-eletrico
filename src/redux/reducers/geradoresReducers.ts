import { ADD_GERADOR, REMOVE_GERADOR, GeradoresState, GeradoresActionTypes } from '../types/geradoresTypes';

const initialState: GeradoresState = {
  geradores: [],
};

const geradoresReducer = (state = initialState, action: GeradoresActionTypes): GeradoresState => {
  switch (action.type) {
    case ADD_GERADOR:
      return {
        ...state,
        geradores: [...state.geradores, action.payload],
      };
    case REMOVE_GERADOR:
      return {
        ...state,
        geradores: state.geradores.filter((gerador) => gerador.id !== action.payload),
      };
    default:
      return state;
  }
};

export default geradoresReducer;
