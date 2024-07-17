import "./EditProfile.css";

export const EditProfile = ({ currentUser }) => {
  return (
    <div className="post-details">
      <h2 className="post-title">Edit Profile</h2>
      <form className="post-content">
        <label htmlFor="name" className="post-meta">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={currentUser.name}
          className="author"
        />
        <label htmlFor="cohort" className="post-meta">
          Cohort:
        </label>
        <input
          type="text"
          id="cohort"
          name="cohort"
          value={currentUser.cohort}
          className="date"
        />
        <button type="submit" className="likes">
          Submit
        </button>
      </form>
    </div>
  );
};
