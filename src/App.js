import React, { useRef, useState } from "react";
import "./App.css";
import "./styles/App.css";
import PostItem from "./compomemts/PostItem";
import PostList from "./compomemts/PostList";
import MyButton from "./compomemts/UI/button/MyButton";
import MyInput from "./compomemts/UI/input/MyInput";
import PostForm from "./compomemts/PostForm";

function App() {
  const [posts, setPosts] = useState([
    { id: 0, title: "aaaa", body: "bbbb" },
    { id: 1, title: "aaaa1", body: "bbbb1" },
  ]);

  // const [title, setTitle] = useState("");
  // const [body, setBody] = useState("");

  const inputRef = useRef();

  // const addNewPost = (e) => {
  //   e.preventDefault();
  //   setPosts([...posts, { ...post, id: Date.now() }]);
  //   // const newPost = { title, body, id: Date.now() };
  //   //
  //   // setPosts([...posts, newPost]);
  //   //
  //   // setTitle("");
  //   // setBody("");
  // };

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <PostList posts={posts} />
    </div>
  );
}

export default App;
