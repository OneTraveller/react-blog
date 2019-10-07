import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import Reducer from '../Reducer';

export const store = createStore(Reducer, applyMiddleware(thunk, fn))

// applyMiddleware中间件，做一些限制
function fn ({ getState }) {
  return (dispatch) => (action) => {
    dispatch(action)
  }
}