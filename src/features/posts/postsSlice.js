import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

//async data fetching boilerplate code. posts/fechPosts: posts: reducer name in slice, fetchPosts: current fucnction name.
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async()=>{
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    //console.log(res);
    return res.data;
})

export const postsSlice = createSlice({
    name:'posts',
    initialState:{
        isLoading:false,
        error: null,
        posts:[],
    },
    //as we're working on async data fetching.
    //builder will work with the return promises.
    extraReducers:(builder)=>{
        builder.addCase(fetchPosts.pending,(state)=>{
            state.isLoading = true;
        });
        builder.addCase(fetchPosts.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.posts = action.payload;
            state.error = null;
            console.log(state.posts);
        });
        builder.addCase(fetchPosts.rejected,(state,action)=>{
            state.isLoading = false;
            state.posts = [];
            state.error = action.error.message;
        });                

    },
});
export default postsSlice.reducer;
