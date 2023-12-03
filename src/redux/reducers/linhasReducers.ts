import { ADD_LINHA, REMOVE_LINHA, LinhasState, LinhasActionTypes } from '../types/linhasTypes';

const initialState: LinhasState = {
  linhas: [],
};

const linhasReducer = (state = initialState, action: LinhasActionTypes): LinhasState => {
  switch (action.type) {
    case ADD_LINHA:
      return {
        ...state,
        linhas: [...state.linhas, action.payload],
      };
    case REMOVE_LINHA:
      return {
        ...state,
        linhas: state.linhas.filter((linha) => linha.id !== action.payload),
      };
    default:
      return state;
  }
};

export default linhasReducer;
