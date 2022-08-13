import React, { useState } from "react";
import { PostsContext } from "../App";

export function Form(props) {
  const [title, setTitle] = useState("Title");
  const [body, setBody] = useState("Body");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addPosts(title, body);
    setTitle("");
    setBody("");
  };

  const handleFocusTitle = (e) => {
    e.preventDefault();
    setTitle("");
  };

  const handleFocusBody = (e) => {
    e.preventDefault();
    setBody("");
  };

  return (
    <PostsContext.Consumer>
      {(posts) => (
        <div>
          <div className="add-post-container">
            <form className="form-container" onSubmit={handleSubmit}>
              <input
                type="text"
                className="form-control"
                value={title}
                onFocus={handleFocusTitle}
                onChange={(e) => setTitle(e.target.value)}
              />
              <textarea
                name=""
                className="form-control"
                id=""
                cols="10"
                rows="8"
                value={body}
                onFocus={handleFocusBody}
                onChange={(e) => setBody(e.target.value)}
              ></textarea>
              <button className="button" type="submit">
                Add Post
              </button>
            </form>
          </div>
        </div>
      )}
    </PostsContext.Consumer>
  );
}
