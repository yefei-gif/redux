import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store'
import { Provider } from 'react-redux'
import App from './App'

//先下载react-redux


// console.log(store);

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>
    , document.getElementById("root"))

//Provider 顶级组件，比app还高，管理所有的组件，