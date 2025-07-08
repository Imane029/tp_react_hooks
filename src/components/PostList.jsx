import React from 'react';
import LoadingSpinner from './LoadingSpinner';

const PostList = ({ posts, loading, error,onSelectPost }) => {
  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div className="text-red-500 dark:text-red-400 text-center py-4">Erreur: {error}</div>;
  }

  if (posts.length === 0) {
    return <div className="text-center text-gray-600 dark:text-gray-300 py-4">Aucun post trouvé.</div>;
  }

  return (
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map(post => (
        <div key={post.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{post.title}</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 line-clamp-3">{post.body}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map(tag => (
              <span
                key={tag}
                className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 text-xs font-medium px-2 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <button
            onClick={() => onSelectPost(post.id)}
            className="mt-2 px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors duration-300"
          >
            Voir détails
          </button>
        </div>
      ))}
    </div>
  );
};

export default PostList;
