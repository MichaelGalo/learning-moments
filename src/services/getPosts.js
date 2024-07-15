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
