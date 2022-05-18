
import { ADD,SUB } from "./type"

//引用type类型

//创建一个同步的action ,增加
export function incrementadd( value){
    return { type:ADD,data:value}
}

//创建一个同步的action ,减
export function incrementsub( value){
    return { type:SUB,data:value}
}
//创建一个异步的action 增加
export function asyncincrement(value,delay){
    return  (dispatch)=>{
         setTimeout(() => {
           dispatch(incrementadd(value))
         }, delay);
    }
}

//制作action