import React from "react";
import { PostsContext } from "../App";

import { Form } from "../components/Form";
import { Posts } from "../components/Posts";

/* https://es.reactjs.org/docs/context.html */

export function MainPage({addPosts, deletePost}) {
  return (
    <PostsContext.Consumer>
      {(posts) => (
        <div>
          <Form addPosts={addPosts} />
          <Posts deletePost={deletePost} />
        </div>
      )}
    </PostsContext.Consumer>
  );
}
