import { createStore, applyMiddleware, compose } from "redux"
import createSagaMiddleware from 'redux-saga'
import mainSaga from './mainSaga.js'
import mainReducer from "./mainReducer"

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(mainReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(mainSaga)

export default store
