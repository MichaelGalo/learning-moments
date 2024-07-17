import { useNavigate } from "react-router-dom";
import "./EditButton.css";

export const EditButton = ({ currentPost }) => {
  const navigate = useNavigate();

  const toggleEdit = () => {
    navigate("/edit-post/" + currentPost.id);
  };

  return (
    <button className="edit-button" onClick={toggleEdit}>
      Edit
    </button>
  );
};
