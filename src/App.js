import React, { useState } from "react";
import "./App.css";
import "./styles/App.css";
import PostItem from "./compomemts/PostItem";
import PostList from "./compomemts/PostList";

function App() {
  const [posts, setPosts] = useState([
    { id: 0, title: "aaaa", desc: "bbbb" },
    { id: 1, title: "aaaa1", desc: "bbbb1" },
  ]);

  return (
    <div className="App">
       <PostList posts={posts}/>
    </div>
  );
}

export default App;
