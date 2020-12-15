import React from "react";
import "./ThreadPage.css";

const ThreadPage = (props) => {
  return (
    <>
      <section className="thread">
        <div className="user-info">User Info</div>
        <div className="thread-container">
          <h1>GA MOTIVATE</h1>
          {/* <h1>{props.post.message}</h1> */}
          <textarea placeholder="Post a question or something that motivates you"></textarea>
          <div className="post-button">
            <button>Post</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThreadPage;
