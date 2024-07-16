// export fetch function to get all posts
export const getAllPosts = async () => {
  const response = await fetch("http://localhost:8088/posts");
  const posts = await response.json();
  return posts;
};

export const getPostById = async (id) => {
  return await fetch(
    `http://localhost:8088/posts/${id}?_expand=user&_expand=topic`
  ).then((res) => res.json());
};

// need a PUT service to update the likes on the post
export const updatePost = async (post) => {
  return await fetch(`http://localhost:8088/posts/${post.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  }).then((res) => res.json());
};

// need a POST service to add a new post
export const addPost = async (post) => {
  return await fetch(`http://localhost:8088/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  }).then((res) => res.json());
};

// need a DELETE service to delete a post
export const deletePost = async (id) => {
  return await fetch(`http://localhost:8088/posts/${id}`, {
    method: "DELETE",
  }).then((res) => res.json());
};

// need a getPostByUserId service to get all posts by a user
export const getPostByUserId = async (userId) => {
  return await fetch(
    `http://localhost:8088/posts?userId=${userId}&_expand=user&_expand=topic`
  ).then((res) => res.json());
};
