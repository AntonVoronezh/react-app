import React from 'react';

const PostItem = ({i, posts}) => {
    return (
        <div className="post">
            <strong>{i}</strong>
            <div>{posts.title}</div>
            <div className="post__btns">
                <button>{posts.desc}</button>
            </div>
        </div>
    );
};

export default PostItem;
