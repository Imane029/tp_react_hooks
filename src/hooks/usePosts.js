import { useState, useEffect, useCallback } from 'react';

// Hook personnalisé pour gérer la récupération et la recherche des posts
const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Fonction pour charger les posts depuis l'API
  const fetchPosts = useCallback(async (query = '') => {
    setLoading(true);
    setError(null);
    try {
      const url = query
        ? `https://dummyjson.com/posts/search?q=${query}`
        : 'https://dummyjson.com/posts';

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }
      const data = await response.json();
      setPosts(data.posts);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  // Effet pour déclencher la recherche lorsque searchQuery change
  useEffect(() => {
    fetchPosts(searchQuery);
  }, [searchQuery, fetchPosts]);

  return {
    posts,
    loading,
    error,
    searchQuery,
    setSearchQuery,
  };
};

export default usePosts;
