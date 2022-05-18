//先下载redux才能使用 npm i redux

import {createStore} from 'redux'
import reducer from './reducer'

export default createStore(reducer)


// store 