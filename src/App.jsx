import React, { useState } from 'react';
import usePosts from './hooks/usePosts';
import PostList from './components/PostList';
import PostSearch from './components/PostSearch';
import ThemeToggle from './components/ThemeToggle';
import PostDetails from './components/PostDetails'; // ✅ make sure this import is here
import useTheme from './hooks/useTheme';

const App = () => {
  const { posts, loading, error, searchQuery, setSearchQuery } = usePosts();
  const { theme } = useTheme();
  const [selectedPostId, setSelectedPostId] = useState(null); // ✅ state

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'} transition-colors duration-300`}>
      <div className="container mx-auto p-4">
        <header className="flex justify-between items-center mb-8 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h1 className="text-4xl font-extrabold text-blue-600 dark:text-blue-400">Mon Blog</h1>
          <ThemeToggle />
        </header>

        {/* ⬇️ Conditional rendering works here */}
        {selectedPostId ? (
          <PostDetails
            postId={selectedPostId}
            onBackToList={() => setSelectedPostId(null)}
          />
        ) : (
          <>
            <PostSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <PostList
              posts={posts}
              loading={loading}
              error={error}
              onSelectPost={(id) => setSelectedPostId(id)}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
