import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import barrasReducer from './redux/reducers/barrasReducers';
import geradoresReducer from './redux/reducers/geradoresReducers';
import linhasReducer from './redux/reducers/linhasReducers';
import transformadoresReducer from './redux/reducers/transformadoresReducers';

const rootReducer = combineReducers({
  barras: barrasReducer,
  geradores: geradoresReducer,
  linhas: linhasReducer,
  transformadores: transformadoresReducer,
  
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
