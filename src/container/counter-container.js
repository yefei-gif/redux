// 容器组件 用来包裹 UI组件
//所以要引入UI组件

import counter from '../components/counter'
import { connect } from "react-redux"

import { incrementadd, incrementsub, asyncincrement} from '../redux/action'


//完整写法
// function mapStatetoProps(state){
//     console.log(state);
//     return { count :state}
// }
//简写
// let  mapStatetoProps=state=>({ count :state})

//完整写法
// function mapdispatchToProps(dispatch) {
//     console.log(dispatch);
//     return {
//         increment: (value) => { dispatch(incrementadd(value)) },
//         decrement: (value) => { dispatch(incrementsub(value)) }
//     }
// }
//简写
//  let mapdispatchToProps = dispatch => (
//     {
//         increment: (value) => { dispatch(incrementadd(value)) },
//         decrement: (value) => { dispatch(incrementsub(value)) }
//     }
// )


//容器组件能接受到states,及发分任务，dispath,然后通过props传递给UI组件，UI组件再拿到状态值，调用传过来的函数去分发action,从而实现状态更新，页面更新



//完整写法
// export default connect(mapStatetoProps,mapdispatchToProps)(counter) 

//简写
export default connect(state=>({ count :state}),{
    increment:incrementadd,
    decrement:incrementsub,
    incrementasync:asyncincrement
})(counter) 


// connect 连接UI 组件，生成一个高级容器组件

//demo 和demo2 相当于向子UI组件，转递props值