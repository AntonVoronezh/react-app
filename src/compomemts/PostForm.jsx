import React, {useState} from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";


const PostForm = ({ create }) => {

  const [post, setPost] = useState({ title: "", body: "" });
  const addNewPost = (e) => {
    e.preventDefault();

    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: "", body: "" });
  };

  return (
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
  );
};

export default PostForm;
