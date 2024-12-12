import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Decrement, Increment, Incrementby5 } from './counteraction';


function Counter() {
    const count=useSelector(state=>state.counter.count)
    const count2=useSelector(state=>state.counter.count2)
    const dispatch=useDispatch()
  return (
    <div>
       <div>count :{count}</div>
     <button onClick={()=>dispatch(Increment())}>Increment</button>
     <button onClick={()=>dispatch(Decrement())}>Decrement</button>
       <div>count2 :{count2}</div>
     <button onClick={()=>dispatch(Incrementby5())}>Incrementby5</button>
    </div>
  )
}

export default Counter;
