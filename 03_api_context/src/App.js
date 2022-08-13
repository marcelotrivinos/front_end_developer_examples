import "./styles.css";
import React, { useState, useEffect } from "react";
import { MainPage } from "./pages/MainPage";

export const PostsContext = React.createContext([]);

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // GET method to default
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        setPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const addPosts = async (title, body) => {
    await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: body,
        userId: Math.random().toString(36).slice(2)
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setPosts((posts) => [data, ...posts]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const deletePost = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE"
    }).then((response) => {
      if (response.status === 200) {
        setPosts(
          posts.filter((post) => {
            return post.id !== id;
          })
        );
      } else {
        return;
      }
    });
  };

  return (
    <PostsContext.Provider value={posts}>
      <div className="App">
        <MainPage addPosts={addPosts} deletePost={deletePost}></MainPage>
      </div>
    </PostsContext.Provider>
  );
}
