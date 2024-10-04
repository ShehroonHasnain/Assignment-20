import { useSelector, useDispatch } from "react-redux"
import { increment,decrement } from "../redux/counterSlice"

export default function Counter() {
    const counter=useSelector(state=>state.counter.value)
    const dispatch=useDispatch()
  return (
    
    <div className="App">
        {/* <h1>Counter App </h1> */}
        
    <div className="counter">
      <button id="decrease"
      onClick={()=>dispatch(decrement())}>-</button>
      <div className="count">{counter}</div>
      <button id="increase"
      onClick={()=>dispatch(increment())}>+</button>
    </div>
  </div>
  )
}
