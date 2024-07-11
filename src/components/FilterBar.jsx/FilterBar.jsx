export const FilterBar = ({ topics, setFilteredTopic, setSearchTerm }) => {
  return (
    <div className="filter-bar">
      <select
        className="post-topic-filter"
        onChange={(event) => setFilteredTopic(parseInt(event.target.value))}
      >
        <option value="0">Select to Filter</option>
        {topics.map((topic) => (
          <option key={topic.id} value={topic.id}>
            {topic.name}
          </option>
        ))}
      </select>

      <input
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
        type="text"
        placeholder="Search Posts"
        className="post-search"
      />
    </div>
  );
};
