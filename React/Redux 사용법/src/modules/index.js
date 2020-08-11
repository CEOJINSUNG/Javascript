//todos와 counter를 합치려고 만든 것임
import {combineReducers} from 'redux';
import counter from './counter';
import todos from './todos';

const rootReducer = combineReducers({
    counter,
    todos
});

export default rootReducer;