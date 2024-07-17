import { useEffect, useState } from "react";
import "./LikeButton.css";
import { addFavorite, updatePost } from "../../services/getPosts";
import { useNavigate } from "react-router-dom";

export const LikeButton = ({ currentPost, currentUser }) => {
  const [likes, setLikes] = useState(currentPost.likes);
  const navigate = useNavigate();

  useEffect(() => {
    setLikes(currentPost.likes);
  }, [currentPost]);

  const toggleLike = () => {
    currentPost.likes++;
    updatePost(currentPost);

    navigate("/favorites");

    // this needs to create a new POST in the user_likes table based on userId and postId
    addFavorite({ userId: currentUser.id, postId: currentPost.id });
  };

  return (
    <button className="like-button" onClick={toggleLike}>
      Like
    </button>
  );
};
