import React, { Component } from 'react';



class Counter extends Component {
   
    componentDidMount(){
     console.log(this.props.increment);
    
    }
    
    increment=()=>{
        let { value} =this.refs.selectNumber
        this.props.increment(value*1)
    }
    decrement=()=>{
        let { value} =this.refs.selectNumber
        this.props.decrement(value*1)
        
    }
    incrementIfOdd=()=>{
        let { value} =this.refs.selectNumber
        let {count} =this.props
        if(count%2===0){
            this.props.increment(value*1)
        }
       
    }
    incrementasync=()=>{
        let { value} =this.refs.selectNumber
        setTimeout(() => {
            this.props.incrementasync(value*1,1000)
        }, 1000);
       
    }

    render() {
        
        return (
            <div>
                <h3>当前计数为{this.props.count}</h3>
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

export default Counter;