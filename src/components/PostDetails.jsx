import React, { useState, useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner"; // Importe le composant LoadingSpinner

// Composant pour afficher les détails d'un post spécifique
const PostDetails = ({ postId, onBackToList }) => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPostDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        // Récupère les détails du post via son ID
        const response = await fetch(`https://dummyjson.com/posts/${postId}`);
        if (!response.ok) {
          throw new Error(`Erreur HTTP: ${response.status}`);
        }
        const data = await response.json();
        setPost(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (postId) {
      fetchPostDetails();
    }
  }, [postId]); // Se déclenche quand l'ID du post change

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="text-red-500 dark:text-red-400 text-center py-4">
        Erreur: {error}
      </div>
    );
  }

  if (!post) {
    return (
      <div className="text-center py-4 text-gray-600 dark:text-gray-300">
        Post non trouvé.
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-2xl mx-auto my-8">
      <button
        onClick={onBackToList}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300 shadow-md"
      >
        Retour à la liste
      </button>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        {post.title}
      </h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        {post.body}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {Array.isArray(post.tags) &&
          post.tags.map((tag) => (
            <span
              key={tag}
              className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 text-sm font-medium px-2.5 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
      </div>
      <p className="text-gray-600 dark:text-gray-400 text-sm">
        Réactions : 👍 {post.reactions.likes} / 👎 {post.reactions.dislikes}
      </p>
      <p className="text-gray-600 dark:text-gray-400 text-sm">
        ID Utilisateur: {post.userId}
      </p>
    </div>
  );
};

export default PostDetails;
