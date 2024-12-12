import { DECREMENT, INCREMENT, INCREMENTBY5 } from "./countertype"

const initialstate={
    count:0,
    count2:0
}
const CounterReducer=(state=initialstate,action)=>{
    switch(action.type){
        case INCREMENT:return{
            ...state,
            count:state.count+action.payload
        }
        case DECREMENT:return{
            ...state,
            count:state.count+action.payload
        }
        case INCREMENTBY5:return{
            ...state,
            count2:state.count2+action.payload
        }
        default:
            return state
    }
}
export default CounterReducer;