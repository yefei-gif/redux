import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store'
import App from "./App"

//放在index.js引入store,再通过props传递


console.log(store);

ReactDOM.render(<App store={store} />,document.getElementById("root"))

store.subscribe(()=>{
    ReactDOM.render(<App store={store} />,document.getElementById("root"))
}) //，监听redux状态   只要状态更新了，就重新渲染页面，