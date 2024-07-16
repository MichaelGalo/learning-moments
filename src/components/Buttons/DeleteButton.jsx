import { deletePost } from "../../services/getPosts";
import "./DeleteButton.css";

export const DeleteButton = ({ currentPost }) => {
  const toggleDelete = () => {
    deletePost(currentPost.id);
  };

  return (
    <button className="delete-button" onClick={toggleDelete}>
      Delete
    </button>
  );
};
