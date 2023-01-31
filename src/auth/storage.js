import {legacy_createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import {sessionService} from 'redux-react-session';

const initialState ={};
const middleWares = [thunk]

const store = legacy_createStore(rootReducer,initialState,compose(applyMiddleware(...middleWares)));

sessionService.initSessionService(store)

export default store;
