import React from 'react';
import usePosts from './hooks/usePosts';
import PostList from './components/PostList';
import PostSearch from './components/PostSearch';
import ThemeToggle from './components/ThemeToggle';
import useTheme from './hooks/useTheme';

// Les constantes IndexCss et AppCss sont supprimées d'ici
// car les fichiers CSS seront importés directement dans main.jsx

const App = () => {
  const { posts, loading, error, searchQuery, setSearchQuery } = usePosts();
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'} transition-colors duration-300`}>
      {/* Les balises <style> sont supprimées d'ici */}
      <script src="https://cdn.tailwindcss.com"></script>
      <div className="container mx-auto p-4">
        <header className="flex justify-between items-center mb-8 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h1 className="text-4xl font-extrabold text-blue-600 dark:text-blue-400">Mon Blog</h1>
          <ThemeToggle />
        </header>

        <PostSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <PostList posts={posts} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default App;
