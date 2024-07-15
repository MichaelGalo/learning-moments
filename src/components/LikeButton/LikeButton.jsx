import "./LikeButton.css";

export const LikeButton = () => {
  const toggleLike = () => {
    console.log("button working");
  };

  return (
    <button className="like-button" onClick={toggleLike}>
      Like
    </button>
  );
};
