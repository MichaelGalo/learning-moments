import { useNavigate } from "react-router-dom";
import "./EditButton.css";

export const EditProfile = ({ currentUser }) => {
  const navigate = useNavigate();

  const toggleEdit = () => {
    navigate("/edit-profile/" + currentUser.id);
  };

  return (
    <button className="edit-button" onClick={toggleEdit}>
      Edit
    </button>
  );
};
