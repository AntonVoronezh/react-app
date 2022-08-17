import React, { useState } from "react";
import "./App.css";
import "./styles/App.css";
import PostItem from "./compomemts/PostItem";

function App() {
  const [posts, setPosts] = useState([
    { id: 0, title: "aaaa", desc: "bbbb" },
    { id: 1, title: "aaaa1", desc: "bbbb1" },
  ]);

  return (
    <div className="App">
        <h1 style={{textAlign: "center"}}>список</h1>
      {posts.map((el) => (
        <PostItem posts={el} key={el.id} />
      ))}
    </div>
  );
}

export default App;
