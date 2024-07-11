// this module should export a react component that returns the individual posts for all posts
export const AllPosts = ({ posts, topics, getTopicName }) => {
  return (
    <>
      <ul>
        {posts.map((post) => (
          <li className="post" key={post.id}>
            <h3>
              <span style={{ fontWeight: "bold" }}>Title:</span> {post.title}
            </h3>
            <p>
              <span style={{ fontWeight: "bold" }}>Topic:</span>{" "}
              {getTopicName(post.topic_id)}
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
