import { useEffect, useState } from "react";
import "./MyPosts.css";
import { getPostByUserId } from "../../services/getPosts";
import { DeleteButton } from "../Buttons/DeleteButton";

export const MyPosts = ({ currentUser }) => {
  const [myPosts, setMyPosts] = useState([]);

  useEffect(() => {
    const fetchMyPosts = async () => {
      const postsData = await getPostByUserId(currentUser.id);
      setMyPosts(postsData);
    };

    fetchMyPosts();
  }, [currentUser.id, myPosts]);

  return (
    <div className="MyPosts">
      <h2>My Posts</h2>
      {myPosts.map((post) => (
        <div key={post.id} className="post">
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <p>Topic: {post.topic.name}</p>
          <p>Author: {post.user.fullName}</p>
          <p>Likes: {post.likes}</p>
          <p>Created: {new Date(post.date).toLocaleString()}</p>
          <DeleteButton currentPost={post} />
        </div>
      ))}
    </div>
  );
};
