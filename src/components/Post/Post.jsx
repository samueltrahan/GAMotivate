import { Link } from "react-router-dom";
import ProfileImage from "../../Assets/Profile Image.png";
import CommentButton from "../../Assets/Comment Button.png";
import SaveButton from "../../Assets/Save button.png";
import "./Post.css";

const Post = ({ singlePost, user, handleDeletePost }) => {
  return (
    <>
      {singlePost ? (
        <section className="post">
          <div className="posted-user-details">
            <div>
              <Link
                className="post-link"
                to={`/user/${singlePost.postedBy._id}`}
              >
                <img src={ProfileImage} alt="avatar" className="avatar" />
                <div>
                  <p className="user-post-name">{singlePost.postedBy.name}</p>
                  <p className="user-post-cohort">
                    {singlePost.postedBy.cohort
                      ? singlePost.postedBy.cohort
                      : "no coh"}
                  </p>
                </div>
              </Link>
            </div>

            {user._id === singlePost.postedBy._id ? (
              <div
                className="post-delete-btn"
                onClick={() => handleDeletePost(singlePost._id)}
              >
                <i className="far fa-trash-alt"></i>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="message">
            <p>{singlePost.message}</p>
          </div>
          <div className="post-bottom-section">
            <div className="post-line"></div>
            <img src={SaveButton} alt="Save Button" className="save-post-btn" />

            <Link to={`/post/${singlePost._id}`}>
              <img
                src={CommentButton}
                alt="comment button"
                className="comment-btn"
              />
            </Link>
          </div>
          <div className="reply-amount">
            <img src={ProfileImage} alt="avatar" className="avatar-bottom" />
            {/* need to pass down replies  */}
            <p>{singlePost.comments.length} replies</p>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
};

export default Post;
