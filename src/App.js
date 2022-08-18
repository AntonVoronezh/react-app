import React, { useRef, useState } from "react";
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

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const inputRef = useRef();

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = { title, body, id: Date.now(), desc: "bbbb" };

    setPosts([...posts, newPost]);

    setTitle("");
    setBody("");
  };

  return (
    <div className="App">
      <form>
        <MyInput
          type="text"
          placeholder="название"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {/*<MyInput*/}
        {/*  type="text"*/}
        {/*  placeholder="описаник"*/}
        {/*  onChange={() => {}}*/}
        {/*  ref={inputRef}*/}
        {/*/>    */}
        <MyInput
          type="text"
          value={body}
          placeholder="описаник"
          onChange={(e) => setBody(e.target.value)}
        />
        <MyButton type="submit" onClick={addNewPost}>
          6777dthyj
        </MyButton>
      </form>
      <PostList posts={posts} />
    </div>
  );
}

export default App;
