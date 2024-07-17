import { deleteFavorite } from "../../services/getPosts";
import "./DeleteButton.css";

export const DeleteFavorite = ({ currentPost }) => {
  const toggleDelete = () => {
    deleteFavorite(currentPost.id);
  };

  return (
    <button className="delete-button" onClick={toggleDelete}>
      Delete
    </button>
  );
};
