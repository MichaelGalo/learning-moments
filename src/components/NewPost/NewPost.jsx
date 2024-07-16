import React, { useState, useEffect } from "react";
import { getAllTopics } from "../../services/getTopics";
import "./NewPost.css";
import { addPost } from "../../services/getPosts";
import { useNavigate } from "react-router-dom";

export const NewPost = ({ currentUser }) => {
  const [topics, setTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTopics = async () => {
      const topicsData = await getAllTopics();
      setTopics(topicsData);
    };

    fetchTopics();
  }, []);

  const handleSave = () => {
    // create new post object to be able to post
    const newPost = {
      title,
      body,
      topicId: parseInt(selectedTopic),
      userId: currentUser.id,
      likes: 0,
      date: new Date(),
    };

    // this will need to be updated to send the data to the API
    addPost(newPost);

    // needs to clear form fields after save
    setTitle("");
    setBody("");
    setSelectedTopic("");

    // redirect to the my-posts page -- for later
    navigate("/my-posts");
  };

  return (
    <form className="NewPostForm" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <select
        value={selectedTopic}
        onChange={(e) => setSelectedTopic(e.target.value)}
      >
        <option value="">Select a Topic</option>
        {topics.map((topic) => (
          <option key={topic.id} value={topic.id}>
            {topic.name}
          </option>
        ))}
      </select>
      <input type="submit" value="Save" onClick={handleSave} />
    </form>
  );
};
