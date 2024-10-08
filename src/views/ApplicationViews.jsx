import { useEffect, useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { AllPostsList } from "../components/AllPosts/AllPostsList";
import { NavBar } from "../components/NavBar/NavBar";
import { PostDetails } from "../components/PostDetails/PostDetails";
import { NewPost } from "../components/NewPost/NewPost";
import { MyPosts } from "../components/MyPosts/MyPosts";
import { EditPost } from "../components/EditPost/EditPost";
import { Favorites } from "../components/Favorites/Favorites";
import { Profile } from "../components/Profile/Profile";
import { EditProfile } from "../components/EditProfile/EditProfile";

export const ApplicationViews = () => {
  // manage the current user
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localLearningUser = localStorage.getItem("learning_user");
    setCurrentUser(JSON.parse(localLearningUser));
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar currentUser={currentUser} />
            <Outlet />
          </>
        }
      >
        {/* <Route index element={<div>Home Page Content</div>} /> */}
        <Route
          index
          path="/all-posts"
          element={<AllPostsList currentUser={currentUser} />}
        />
        <Route
          path="/post-details/:postId"
          element={<PostDetails currentUser={currentUser} />}
        />
        <Route
          path="/new-post"
          element={<NewPost currentUser={currentUser} />}
        />
        <Route
          path="/my-posts"
          element={<MyPosts currentUser={currentUser} />}
        />
        <Route
          path="/edit-post/:postId"
          element={<EditPost currentUser={currentUser} />}
        />
        <Route
          path="/favorites"
          element={<Favorites currentUser={currentUser} />}
        />
        <Route
          path="/profile/:userId"
          element={<Profile currentUser={currentUser} />}
        />
        <Route
          path="/edit-profile/:userId"
          element={<EditProfile currentUser={currentUser} />}
        />
      </Route>
    </Routes>
  );
};
