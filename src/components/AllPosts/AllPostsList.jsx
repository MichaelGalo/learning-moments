import { useEffect, useState } from "react";
import { AllPosts } from "./AllPosts";
import { getAllPosts } from "../../services/getPosts";
import "./AllPosts.css";
import { getAllTopics } from "../../services/getTopics";
import { FilterBar } from "../FilterBar.jsx/FilterBar";

export const AllPostsList = ({ currentUser }) => {
  const [posts, setPosts] = useState([]);
  const [topics, setTopics] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [filteredTopic, setFilteredTopic] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  // hook to set posts initially
  useEffect(() => {
    getAllPosts().then((posts) => {
      setPosts(posts);
      setFilteredPosts(posts); // Initialize filteredPosts
    });
  }, []);

  // hook to set topics
  useEffect(() => {
    getAllTopics().then((topics) => {
      setTopics(topics);
    });
  }, []);

  // hook to watch for filtered topic changes
  useEffect(() => {
    if (filteredTopic === 0) {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter((post) => post.topic_id === filteredTopic);
      setFilteredPosts(filtered);
    }
  }, [filteredTopic, posts]);

  // hook to watch for search term changes
  useEffect(() => {
    if (searchTerm === "") {
      setFilteredPosts(posts);
    } else {
      const matchedTerms = posts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPosts(matchedTerms);
    }
  }, [searchTerm, posts]);

  const getTopicName = (topicId) => {
    const topic = topics.find((topic) => topic.id === topicId);
    return topic ? topic.name : "Unknown Topic";
  };

  return (
    <>
      <h2 className="centered-div post-header">All Posts</h2>
      <div className="centered-div">
        <FilterBar
          topics={topics}
          setFilteredTopic={setFilteredTopic}
          setSearchTerm={setSearchTerm}
        />
      </div>
      <div className="centered-div">
        <AllPosts
          posts={filteredPosts}
          topics={topics}
          getTopicName={getTopicName}
          currentUser={currentUser}
        />
      </div>
    </>
  );
};
