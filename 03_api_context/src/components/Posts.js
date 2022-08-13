import React from "react";
import { PostsContext } from "../App";

export function Posts(props) {
  const deleteButton = (id) => (
    <div>
      <div className="button" onClick={() => props.deletePost(id)}>
        Delete
      </div>
    </div>
  );

  const subString = (text, maxLength) => {
    let length = text.length;
    if (length >= maxLength) {
      return text.substring(0, maxLength - 3).concat("...");
    } else {
      return text;
    }
  };

  const adaptTitle = (title) => {
    const maxLength = 15;
    return subString(title, maxLength);
  };

  const adaptBody = (body) => {
    const maxLength = 60;
    return subString(body, maxLength);
  };

  return (
    /* 
    https://stackoverflow.com/questions/56571818/seeing-render-is-not-a-function-when-trying-to-use-context-api
    
    The Context Consumer uses a render
    prop, specifically a function as a 
    child component, so it expects its
    immediate child to be a function
    (not a component). */

    <PostsContext.Consumer>
      {(posts) => (
        <div className="card-lists">
          {posts.map((post) => {
            return (
              <div className="post-card" key={post.id}>
                <h2 className="post-title">{adaptTitle(post.title)}</h2>
                <p className="post-body">{adaptBody(post.body)}</p>
                {deleteButton(post.id)}
              </div>
            );
          })}
        </div>
      )}
    </PostsContext.Consumer>
  );
}
