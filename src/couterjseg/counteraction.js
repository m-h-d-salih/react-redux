import { DECREMENT, INCREMENT, INCREMENTBY5 } from "./countertype"

export const Increment=()=>{
    return{
        type:INCREMENT,
        payload:1
    }
}
export const Decrement=()=>{
    return{
        type:DECREMENT,
        payload:-1
    }
}
export const Incrementby5=()=>{
    return{
        type:INCREMENTBY5,
        payload:5
    }
}