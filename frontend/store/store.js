import {createStore} from 'redux';
import RootReducer from '../reducers/root_reducer';
import masterMiddleware from '../middleware/master_middleware';

const preloadedState = {todos: {}};
const configureStore = () => (
  createStore(RootReducer, preloadedState, masterMiddleware)
);

export default configureStore;
