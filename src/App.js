import React, { useState } from "react";
import "./App.css";
import "./styles/App.css";
import PostItem from "./compomemts/PostItem";
import PostList from "./compomemts/PostList";
import MyButton from "./compomemts/UI/button/MyButton";
import MyInput from "./compomemts/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    { id: 0, title: "aaaa", desc: "bbbb" },
    { id: 1, title: "aaaa1", desc: "bbbb1" },
  ]);

  return (
    <div className="App">
      <form>
        <MyInput type="text" placeholder='название'/>
        <MyInput type="text" placeholder='описаник'/>
          <MyButton > 6777dthyj </MyButton>
      </form>
       <PostList posts={posts}/>
    </div>
  );
}

export default App;
