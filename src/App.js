import './App.css';
import CounterView from './features/counter/CounterView';
import PostsView from './features/posts/PostsView';

function App() {
  return (
    <div className="App">
      <h3 style={{color:'red'}}>CounterApp_APIFectching_using_Redux-Toolkit</h3>
      <CounterView/>
      <PostsView/>
      
    </div>
  );
}

export default App;
