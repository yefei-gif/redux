import React, { Component } from 'react';
// import store from './redux/store';  不直接 引入

//引入action 这里要使用

import {incrementadd,incrementsub} from './redux/action'


class App extends Component {
   
    componentDidMount(){
    //  console.log( store.getState());
    
    }
    // store.getState() 获取初始值
    increment=()=>{
        let { value} =this.refs.selectNumber
        this.props.store.dispatch(incrementadd(value*1)) // 不要直接传action ，直接去调用来生成action
        // this.props.store.dispatch({type:'increment',data:value*1}) 由store分发任务
    
        // console.log(value);
    }
    decrement=()=>{
        let { value} =this.refs.selectNumber
        // this.props.store.dispatch({type:'decrement',data:value*1})
        this.props.store.dispatch(incrementsub(value*1))
    }
    incrementIfOdd=()=>{
        let { value} =this.refs.selectNumber
        let count=this.props.store.getState()
        if(count%2===0){
            // this.props.store.dispatch({type:'increment',data:value*1})   
            this.props.store.dispatch(incrementadd(value*1))
        }
    }
    incrementasync=()=>{
        let { value} =this.refs.selectNumber

        setTimeout(()=>{
            // this.props.store.dispatch({type:'increment',data:value*1}) 
            this.props.store.dispatch(incrementadd(value*1))
        },1000)
    }

    render() {
        let count=this.props.store.getState() //直接引用直接使用
        //当在index.js引入
       
        return (
            <div>
                <h3>当前计数为{count}</h3>
                <select name="" id="" ref="selectNumber">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.incrementIfOdd}>偶数+</button>
                <button onClick={this.incrementasync}>异步+</button>
            </div>
        );
    }
}

export default App;