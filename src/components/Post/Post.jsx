import React from "react";
import { Link } from "react-router-dom";
import "./Post.css";

const Post = ({ post }) => {
  return (
    <>
      {post ? (
        <section className="post">
          <div>
            <img src="" alt="avatar" />
            <p>{post.postedBy.name}</p>
            <p>{post.cohort ? post.cohort : "no cohort"}</p>
          </div>
          <div className="message">
            <p>{post.message}</p>
          </div>
          <Route exact path="/thread" render={() => <ThreadPage post={post} />}>
            Thread
          </Route>
        </section>
      ) : (
        ""
      )}
    </>
  );
};

export default Post;
