import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { increment,decrement,reset,incrementByTen } from './counterSlice';

const CounterView = () => {
    const count = useSelector(state => state.counter.count);
    //console.log(count)
    const dispatch = useDispatch();
  return (
    <div>
      <h2 style={{color:'darkblue'}}>CounterView</h2>
        <h3>Count: {count}</h3>
        <button onClick={()=>{dispatch(increment())}}>Increment</button>
        <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
        <button onClick={()=>{dispatch(reset())}}>Reset</button>
        <button onClick={()=>{dispatch(incrementByTen(10))}}>IncrementByTen</button>
        
    </div>
  )
}

export default CounterView
