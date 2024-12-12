import { SUBMIT_FORM } from "./formtype"

const initialstate={
    name:'empty',
    age:0
}
export const formreducer=(state=initialstate,{type,name,age})=>{
    switch (type) {
        case SUBMIT_FORM:return{
            ...state,
            name,
            age
        }
    
        default:
            return state
    }
}