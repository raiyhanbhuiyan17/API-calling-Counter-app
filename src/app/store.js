import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import postReducer from "../features/posts/postsSlice";


const store = configureStore({
    reducer: {
        counter: counterReducer,//as we export default counterSlice so here we can change the name.
        posts: postReducer, 
    },
    
})

export default store;