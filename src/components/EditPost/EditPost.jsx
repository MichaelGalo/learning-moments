import "./EditPost.css";
import React, { useState, useEffect } from "react";
import { getAllTopics } from "../../services/getTopics";
import { getPostById, updatePost } from "../../services/getPosts";
import { useNavigate, useParams } from "react-router-dom";

//TODO: I still need currentPost to be passed in as a prop & set values as placeholders
// also will need a new Edit Post service instead of a new post

export const EditPost = ({ currentUser }) => {
  const [topics, setTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  // useParams to get the postId
  // get the post by id
  const { postId } = useParams();
  const [currentPost, setCurrentPost] = useState({});
  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPostById(postId);
      setCurrentPost(post);
    };
    fetchPost();
  }, [postId]);

  useEffect(() => {
    const fetchTopics = async () => {
      const topicsData = await getAllTopics();
      setTopics(topicsData);
    };

    fetchTopics();
  }, []);

  const handleSave = () => {
    // if the user doesn't change the title or body, keep the current values
    const newTitle = title || currentPost.title;
    const newBody = body || currentPost.body;
    const newTopicId = selectedTopic
      ? parseInt(selectedTopic)
      : currentPost.topicId;

    // create new post object to be able to post
    const newPost = {
      id: postId,
      title: newTitle,
      body: newBody,
      topicId: newTopicId,
      userId: currentUser.id,
      likes: 0,
      date: new Date().toLocaleDateString(),
    };

    // this will need to be updated to send the data to the API
    updatePost(newPost);

    // redirect to the my-posts page -- for later
    navigate("/my-posts");
  };

  return (
    <form className="EditPostForm" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder={currentPost.title}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder={currentPost.body}
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <select
        value={selectedTopic}
        onChange={(e) => setSelectedTopic(e.target.value)}
      >
        {topics
          .filter((topic) => topic.id === currentPost.topicId)
          .map((filteredTopic) => (
            <option key={filteredTopic.id} value={filteredTopic.id}>
              {filteredTopic.name}
            </option>
          ))}
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
