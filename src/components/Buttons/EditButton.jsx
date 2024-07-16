import "./EditButton.css";

export const EditButton = ({ currentPost }) => {
  //TODO: have the toggleEdit function navigate to the edit post component using useNavigate

  const toggleEdit = () => {
    console.log("button working");
  };

  return (
    <button className="edit-button" onClick={toggleEdit}>
      Edit
    </button>
  );
};
