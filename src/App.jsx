// src/App.jsx
import React, { useState, useEffect } from 'react';
import usePosts from './hooks/usePosts';
import PostList from './components/PostList';
import PostSearch from './components/PostSearch'; // Cette ligne doit être présente et non commentée

import './App.css';

function App() {
  const { posts, isLoading, error } = usePosts();
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    if (posts.length > 0) {
      setFilteredPosts(posts);
    }
  }, [posts]);

  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
      setFilteredPosts(posts);
      return;
    }

    const lowercasedSearchTerm = searchTerm.toLowerCase();
    const results = posts.filter(post =>
      post.title.toLowerCase().includes(lowercasedSearchTerm) ||
      post.body.toLowerCase().includes(lowercasedSearchTerm)
    );
    setFilteredPosts(results);
  };

  return (
    <div className="App" style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '20px auto', padding: '0 20px', backgroundColor: '#f0f2f5', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
      <h1 style={{ textAlign: 'center', color: '#2c3e50', padding: '20px 0', borderBottom: '1px solid #e0e0e0' }}>Ma Liste de Posts</h1>

      {/* Assure-toi que cette ligne est présente et non commentée */}
      <PostSearch onSearch={handleSearch} />

      <PostList posts={filteredPosts} isLoading={isLoading} error={error} />
    </div>
  );
}

export default App;