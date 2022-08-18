import React, { useRef, useState } from "react";
import "./App.css";
import "./styles/App.css";
import PostItem from "./compomemts/PostItem";
import PostList from "./compomemts/PostList";
import MyButton from "./compomemts/UI/button/MyButton";
import MyInput from "./compomemts/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    { id: 0, title: "aaaa", body: "bbbb" },
    { id: 1, title: "aaaa1", body: "bbbb1" },
  ]);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [post, setPost] = useState({ title: "", body: "" });

  const inputRef = useRef();

  const addNewPost = (e) => {
    e.preventDefault();
    setPosts([...posts, { ...post, id: Date.now() }]);
    // const newPost = { title, body, id: Date.now() };
    //
    // setPosts([...posts, newPost]);
    //
    // setTitle("");
    // setBody("");
  };

  return (
    <div className="App">
      <form>
        <MyInput
          type="text"
          placeholder="название"
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
        />
        {/*<MyInput*/}
        {/*  type="text"*/}
        {/*  placeholder="описаник"*/}
        {/*  onChange={() => {}}*/}
        {/*  ref={inputRef}*/}
        {/*/>    */}
        <MyInput
          type="text"
          value={post.body}
          placeholder="описаник"
          onChange={(e) => setPost({ ...post, body: e.target.value })}
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
