import React, { useRef, useState } from "react";
import "./App.css";
import "./styles/App.css";
import PostItem from "./compomemts/PostItem";
import PostList from "./compomemts/PostList";
import MyButton from "./compomemts/UI/button/MyButton";
import MyInput from "./compomemts/UI/input/MyInput";
import PostForm from "./compomemts/PostForm";
import MySelect from "./compomemts/UI/select/MySelect";

function App() {
  const [posts, setPosts] = useState([
    { id: 0, title: "aaaa", body: "bbbb" },
    { id: 1, title: "aaaa1", body: "bbbb1" },
  ]);

  // const [title, setTitle] = useState("");
  // const [body, setBody] = useState("");
  const [selectedSort, setSelectedSort] = useState("");

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

  const removePost = (post) => {
    setPosts(posts.filter((el) => el.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort());
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <MySelect
        defaultValue=""
        options={[
          { value: "title", name: "title" },
          { value: "body", name: "body" },
        ]}
        value={selectedSort}
        onChange={sortPosts}
      />
      {posts.length ? (
        <PostList posts={posts} remove={removePost} />
      ) : (
        <div>-------------</div>
      )}
    </div>
  );
}

export default App;
