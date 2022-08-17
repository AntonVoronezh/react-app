import React from 'react';

const PostItem = ({posts}) => {
    return (
        <div className="post">
            <strong>{posts.id}</strong>
            <div>{posts.title}</div>
            <div className="post__btns">
                <button>{posts.desc}</button>
            </div>
        </div>
    );
};

export default PostItem;
