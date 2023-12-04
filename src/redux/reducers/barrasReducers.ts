import { ADD_BARRA, REMOVE_BARRA, BarrasState, BarrasActionTypes } from '../types/barrasTypes';

const initialState: BarrasState = {
  barras: [],
};

const barrasReducer = (state = initialState, action: BarrasActionTypes): BarrasState => {
  switch (action.type) {
    case ADD_BARRA:
      return {
        ...state,
        barras: [...state.barras, action.payload],
      };
    case REMOVE_BARRA:
      return {
        ...state,
        barras: state.barras.filter((barra) => barra.id !== action.payload),
      };
    default:
      return state;
  }
};

export default barrasReducer;
