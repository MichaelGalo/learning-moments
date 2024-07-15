import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AllPostsList } from "../components/AllPosts/AllPostsList";

export const ApplicationViews = () => {
  // manage the current user
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localLearningUser = localStorage.getItem("learning_user");
    setCurrentUser(JSON.parse(localLearningUser));
  }, []);

  return (
    <Routes>
      <Route>
        <Route index path="/" element={<AllPostsList />} />
      </Route>
    </Routes>
  );
};
