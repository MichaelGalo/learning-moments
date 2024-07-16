import { useParams } from "react-router-dom";
import "./PostDetails.css";
import { useEffect, useState } from "react";
import { getPostById } from "../../services/getPosts";
import { LikeButton } from "../Buttons/LikeButton";
import { EditButton } from "../Buttons/EditButton";

export const PostDetails = ({ currentUser }) => {
  let { postId } = useParams();

  const [currentPost, setCurrentPost] = useState({});

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPostById(postId);
      setCurrentPost(post);
    };
    fetchPost();
  }, [postId, currentPost]);

  return (
    <div className="post-details">
      <h2 className="post-title">{currentPost.title}</h2>
      <div className="post-meta">
        <span className="author">
          By: {currentPost.user ? currentPost.user.name : "Loading author..."}
        </span>
        <span className="date">Published: {currentPost.date}</span>
        <span className="topic">
          Topic:{" "}
          {currentPost.topic ? currentPost.topic.name : "Loading topic..."}
        </span>
        <span>
          {currentPost.likes !== undefined && (
            <span className="likes">Likes: {currentPost.likes}</span>
          )}
        </span>
      </div>
      <p className="post-content">{currentPost.body}</p>
      {currentUser.id !== currentPost.userId ? (
        <div className="like-btn">
          <LikeButton currentPost={currentPost} />
        </div>
      ) : (
        ""
      )}
      <div className="edit-btn">
        {currentUser.id === currentPost.userId ? (
          <div className="like-btn">
            <EditButton />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
