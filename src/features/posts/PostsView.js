import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from './postsSlice';

const PostsView = () => {
  const {isLoading,error,posts} = useSelector(state =>state.posts);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])
  
  return (
    <div>
        <h2 style={{color:'darkblue'}}>PostsView</h2>
        {isLoading && <h3>Loading...</h3>}
        {error && <h3>{error.message}</h3>}
        <section>
          {posts && posts.map((post) =>{
            console.log(post.title);
              return <article>
                  <h5>{post.title}</h5>
                  <p>{post.body}</p>
                </article>
          })}
        </section>
        

      
    </div>
  )
}

export default PostsView
