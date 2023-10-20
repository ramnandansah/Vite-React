import { useState, useEffect } from "react";
import { getPosts } from "./api.async.js";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  const getPostData = async () => {
    try {
      const res = await getPosts();
      setPosts(res);
      console.log({ res });
        // setPosts(res);           //Don't Consider.
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPostData();
  }, []);

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id} className="p-4 my-2 mx-4 border rounded-sm">
          {post.id}. {post.title}
        </li>
      ))}
    </ul>
  );
};

export default PostList;

//Recorded lacture 13/08/ 59:56;