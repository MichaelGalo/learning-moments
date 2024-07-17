// this module should export a react component that returns the individual posts for all posts
import { Link } from "react-router-dom"; // Step 1
import { EditButton } from "../Buttons/EditButton";

export const AllPosts = ({ posts, topics, getTopicName, currentUser }) => {
  return (
    <>
      <ul>
        {posts.map((post) => (
          <li className="post" key={post.id}>
            <h3>
              <span style={{ fontWeight: "bold" }}>Title:</span>{" "}
              <Link to={`/post-details/${post.id}`}>{post.title}</Link>{" "}
            </h3>
            <p>
              <span style={{ fontWeight: "bold" }}>Topic:</span>{" "}
              {getTopicName(post.topicId)}
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}>Likes:</span> {post.likes}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};
