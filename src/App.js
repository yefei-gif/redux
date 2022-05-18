import React, { Component } from 'react';
import CounterCcontainer from './container/counter-container'

class App extends Component {
    render() {
        return (
            <CounterCcontainer></CounterCcontainer>  //连接容器组件
        );
    }
}

export default App;