import state from './state'
import * as type from './type.js'

const matutaions={
    //购物车
    [type.SET_CARTS](state,data){
        state.carts.push(data)
        localStorage.setItem("carts",JSON.stringify(state.carts));
    },
}

export default matutaions