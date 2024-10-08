import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

export const NavBar = ({ currentUser }) => {
  const navigate = useNavigate();

  return (
    <ul className="navbar">
      <li className="navbar-item">
        <Link to={"/all-posts"}>All Posts</Link>
      </li>
      <li className="navbar-item">
        <Link to={"/new-post"}>New Post</Link>
      </li>
      <li className="navbar-item">
        <Link to={"/my-posts"}>My Posts</Link>
      </li>
      <li className="navbar-item">
        <Link to={"/favorites"}>Favorites</Link>
      </li>
      <li className="navbar-item">
        <Link to={`/profile/${currentUser?.id}`}>Profile</Link>
      </li>
      {localStorage.getItem("learning_user") && (
        <li className="navbar-item">
          <Link
            to=""
            onClick={() => {
              localStorage.removeItem("learning_user");
              navigate("/login", { replace: true });
            }}
          >
            Logout
          </Link>
        </li>
      )}
    </ul>
  );
};
