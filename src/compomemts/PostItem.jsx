import React from 'react';
import MyButton from "./UI/button/MyButton";

const PostItem = ({i, posts, remove}) => {
    return (
        <div className="post">
            <strong>{i}</strong>
            <div>{posts.title}</div>
            <div>{posts.body}</div>
            <div className="post__btns">
                <MyButton onClick={()=>remove(posts)}>uiygi8</MyButton>
            </div>
        </div>
    );
};

export default PostItem;
