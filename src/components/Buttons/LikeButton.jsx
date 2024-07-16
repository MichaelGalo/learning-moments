import { useEffect, useState } from "react";
import "./LikeButton.css";
import { updatePost } from "../../services/getPosts";

export const LikeButton = ({ currentPost }) => {
  const [likes, setLikes] = useState(currentPost.likes);

  useEffect(() => {
    setLikes(currentPost.likes);
  }, [currentPost]);

  const toggleLike = () => {
    currentPost.likes++;
    updatePost(currentPost);
  };

  return (
    <button className="like-button" onClick={toggleLike}>
      Like
    </button>
  );
};
