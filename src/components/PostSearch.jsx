// src/components/PostSearch.jsx
import React, { useState } from 'react';

const PostSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="post-search" style={{ marginBottom: '25px', textAlign: 'center' }}>
      <input
        type="text"
        placeholder="Rechercher par titre ou contenu..."
        value={searchTerm}
        onChange={handleChange}
        style={{
          padding: '12px 20px',
          width: '85%',
          maxWidth: '500px',
          borderRadius: '30px',
          border: '1px solid #ccc',
          fontSize: '1.1em',
          boxShadow: 'inset 0 1px 4px rgba(0,0,0,0.08)',
          outline: 'none'
        }}
      />
    </div>
  );
};

export default PostSearch;