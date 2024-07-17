import { useEffect, useState } from "react";
import "./Profile.css";
import { getUserById } from "../../services/userService";
import { getPostByUserId } from "../../services/getPosts";
import { useParams } from "react-router-dom";
import { EditProfile } from "../Buttons/EditProfile";

export const Profile = ({ currentUser }) => {
  let { userId } = useParams();
  const [userDetails, setUserDetails] = useState({});
  const [numPosts, setNumPosts] = useState(0);

  //get user by the currentUser.id
  useEffect(() => {
    getUserById(userId).then((user) => {
      setUserDetails(user);
    });
  }, [userId]);

  // get number of posts by userid
  useEffect(() => {
    getPostByUserId(userId).then((posts) => {
      setNumPosts(posts.length);
    });
  }, [userId]);

  return (
    <div className="Profile">
      <h2>Profile</h2>
      <div className="profile-info">
        <h3>Name: {userDetails.name}</h3>
        <h3>Cohort: {userDetails.cohort}</h3>
        <h3>Number of Posts: {numPosts}</h3>
      </div>
      {currentUser.id === parseInt(userId) && (
        <EditProfile currentUser={currentUser} />
      )}
    </div>
  );
};
