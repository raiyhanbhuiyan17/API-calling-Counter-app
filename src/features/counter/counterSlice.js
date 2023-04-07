import {createSlice} from '@reduxjs/toolkit'
//previously:
// state: count:0
// increment, decrement, reset

// const incrementCounter = (error) => {
//   return { type: "INCREMENT" ,payload:error};
// };

export const counterSlice = createSlice({
    name: "counter", //slice name 
    initialState:{count: 0},
    reducers:{
        increment:(state)=>{
            state.count = state.count + 1
        },
        decrement:(state)=>{
            state.count = state.count - 1
        },
        reset:(state)=>{
            state.count = 0
        }, 
        incrementByTen:(state,action)=>{
            state.count = state.count + action.payload
        },               
    },

});
// export reducer and action createor
export default counterSlice.reducer;
// Action creators are generated for each case reducer function automatically after writing below code
export const {increment, decrement,reset,incrementByTen} = counterSlice.actions;
