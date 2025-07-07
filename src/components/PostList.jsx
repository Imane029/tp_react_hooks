// src/components/PostList.jsx
import React from 'react';

const PostList = ({ posts, isLoading, error }) => {
  if (isLoading) {
    return <p style={{ textAlign: 'center', fontSize: '1.2em', color: '#007bff' }}>Chargement des posts en cours...</p>;
  }

  if (error) {
    return <p style={{ textAlign: 'center', fontSize: '1.2em', color: 'red', fontWeight: 'bold' }}>Erreur ! Impossible de charger les posts : {error.message}</p>;
  }

  if (posts.length === 0) {
    return <p style={{ textAlign: 'center', fontSize: '1.2em', color: '#6c757d' }}>Aucun post trouvé pour le moment.</p>;
  }

  return (
    <div className="post-list" style={{ marginTop: '20px' }}>
      {posts.map(post => (
        <div key={post.id} className="post-item" style={{
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          padding: '15px',
          margin: '15px 0',
          backgroundColor: '#f9f9f9',
          boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
        }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#34495e' }}>{post.title}</h3>
          <p style={{ margin: '0', color: '#555', fontSize: '0.9em', lineHeight: '1.5' }}>
            {post.body.length > 180 ? post.body.substring(0, 180) + '...' : post.body}
          </p>
        </div>
      ))}
    </div>
  );
};

export default PostList;