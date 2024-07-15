import { useParams } from "react-router-dom";
import "./PostDetails.css";
import { useEffect, useState } from "react";
import { getPostById } from "../../services/getPosts";
import { LikeButton } from "../LikeButton/LikeButton";

export const PostDetails = ({ currentUser }) => {
  let { postId } = useParams();

  const [currentPost, setCurrentPost] = useState({});

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPostById(postId);
      setCurrentPost(post);
    };
    fetchPost();
  }, [postId]);

  //   TODO: add a like button to non-authors -- likely another component for that conditional -- also will need to pass down user to this module by drilling

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
      <LikeButton />
    </div>
  );
};
