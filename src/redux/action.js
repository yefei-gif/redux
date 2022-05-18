
import { ADD,SUB } from "./type"

//引用type类型

export function incrementadd( value){
    return { type:ADD,data:value}
}

export function incrementsub( value){
    return { type:SUB,data:value}
}

//制作action