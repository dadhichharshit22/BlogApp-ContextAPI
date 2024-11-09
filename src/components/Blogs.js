import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import spinner from "./spinner.js";

const Blogs = () => {
  // consume
  const { posts, loading } = useContext(AppContext);
  return (
    <div>
      {loading ? (
        <spinner />
      ) : posts.length === 0 ? (
        <div>
          <p>No Post Found</p>
        </div>
      ) : (
        posts.map((post) => (
          <div>
            <p>{post.title}</p>
            <p>
              By <span>{post.authot}</span> on <span>{post.category}</span>
            </p>
            <p>Posted on {post.date}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Blogs;
