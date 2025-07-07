import React, { useCallback } from 'react';
// import useDebounce from '../hooks/useDebounce'; // Supprimez cette ligne

const PostSearch = ({ searchQuery, setSearchQuery }) => {
  // Supprimez la ligne suivante car useDebounce sera déplacé dans usePosts
  // const debouncedSearchQuery = useDebounce(searchQuery, 500);

  const handleChange = useCallback((e) => {
    setSearchQuery(e.target.value); // Met à jour l'état de recherche immédiatement
  }, [setSearchQuery]);

  return (
    <div className="mb-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <input
        type="text"
        placeholder="Rechercher par titre ou contenu..."
        value={searchQuery}
        onChange={handleChange}
        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
      />
    </div>
  );
};

export default PostSearch;
