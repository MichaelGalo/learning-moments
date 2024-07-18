import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EditProfile.css";
import { getUserById, updateUser } from "../../services/userService";

export const EditProfile = ({ currentUser }) => {
  const [name, setName] = useState(currentUser.name || "");
  const [cohort, setCohort] = useState(currentUser.cohort || "");

  const [userDetails, setUserDetails] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getUserById(currentUser.id).then((user) => {
      setUserDetails(user);
    });
  }, [currentUser.id]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const updatedUser = {
      ...userDetails,
      id: currentUser.id,
      name: name !== "" ? name : userDetails.name,
      cohort: cohort !== "" ? cohort : userDetails.cohort,
    };
    debugger;
    await updateUser(updatedUser);

    navigate("/profile/" + currentUser.id);
  };

  return (
    <div className="post-details">
      <h2 className="post-title">Edit Profile</h2>
      <form className="post-content" onSubmit={handleSubmit}>
        <label htmlFor="name" className="post-meta">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="author"
          placeholder={userDetails.name}
        />
        <label htmlFor="cohort" className="post-meta">
          Cohort:
        </label>
        <input
          type="text"
          id="cohort"
          name="cohort"
          value={cohort}
          onChange={(e) => setCohort(e.target.value)}
          className="date"
          placeholder={userDetails.cohort}
        />
        <button type="submit" className="likes">
          Submit
        </button>
      </form>
    </div>
  );
};
