// action -> store
// reducer 根据 store响应
// single store
// complete state Set
// state is predictable

import {createStore} from 'redux';
import todoApp from './reducer';

let store = createStore(todoApp) ; 