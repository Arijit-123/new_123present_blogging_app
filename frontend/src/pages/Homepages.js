import React, { useEffect, useState } from 'react';
import { getPosts } from '../api/api';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const postsData = await getPosts();
      setPosts(postsData);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post._id}>
            <Link to={`/post/${post._id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
