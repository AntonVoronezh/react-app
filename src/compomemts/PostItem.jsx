import React from 'react';

const PostItem = ({i, posts}) => {
    return (
        <div className="post">
            <strong>{i}</strong>
            <div>{posts.title}</div>
            <div>{posts.body}</div>
            <div className="post__btns">
                <button>uiygi8</button>
            </div>
        </div>
    );
};

export default PostItem;
