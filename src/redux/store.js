//先下载redux才能使用 npm i redux


import {createStore,applyMiddleware} from 'redux'
import reducer from './reducer'
//先下载npm install --save redux-thunk
import thunk from 'redux-thunk'

export default createStore(reducer,applyMiddleware(thunk))


// store 
//applyMiddleware(thunk) 应该于异步中间介