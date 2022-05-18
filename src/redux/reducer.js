

let initstates = 0
export default function operaCount(prestates = initstates, action) {
    //根据action中的type和data，决定应该去怎么操作状态

    let { type, data } = action
    switch (type) {
        case "increment":
            prestates += data
            return prestates
        case "decrement":
            prestates -= data
            return prestates
        default:
            return prestates
    }

}
// stroe dispatch 分发一个任务action ,
//再由reducer 执行处理 ，执行完再更新状态，
//store再通过getState拿到最新的状态
//但是redux里，不像react的state.只要状态更新，就会执行render更新页面，而是加一个监听store.subscribe，只要状态更新了，就重新渲染页面
