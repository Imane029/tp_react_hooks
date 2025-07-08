import { useState, useEffect } from 'react';

// Hook personnalisé pour détecter l'intersection d'un élément
const useIntersectionObserver = (ref, options) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    // Capture la valeur actuelle de ref.current au début de l'effet
    const currentRef = ref.current;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    // Utilise la variable locale pour observer
    if (currentRef) {
      observer.observe(currentRef);
    }

    // Nettoyage de l'observateur
    return () => {
      // Utilise la variable locale pour désobserver
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options]); // 'ref' est toujours une dépendance car l'objet ref lui-même pourrait changer

  return isIntersecting;
};

export default useIntersectionObserver;

