
# TP React Hooks - Application de Blog

Ce TP a pour objectif de mettre en pratique l'utilisation des Hooks React (`useState`, `useEffect`, `useCallback`, `useMemo`) ainsi que la création de hooks personnalisés à travers une application de blog simple.

---

## 🚀 Installation et configuration initiale

```bash
git clone https://github.com/pr-daaif/tp-react-hooks-blog.git
cd tp-react-hooks-blog
git remote remove origin
git remote add origin https://github.com/imane029/tp-react-hooks-blog.git
git push -u origin main
npm install
npm start
```

---

## ✅ Exercice 1 : État et Effets

### 🎯 Objectif : Implémenter l'affichage et la recherche de posts

---

### 1.1 Compléter le hook `usePosts` pour récupérer les posts depuis l'API dummyjson.com

**🧐 Explication de la solution :**

J’ai créé un hook personnalisé `usePosts` dans `src/hooks/usePosts.js`. Il gère 3 états :  
- `posts` (liste des articles)  
- `isLoading` (chargement)  
- `error` (erreurs éventuelles)

L’appel à `fetch` est lancé dans `useEffect` au montage du composant.  
J’utilise `try/catch/finally` pour bien gérer la requête et l’état.

**📷 Capture d’écran (chargement initial) :**  
![Chargement initial](https://github.com/Imane029/tp_react_hooks/blob/7c6930249dfc04f57fcb0aa439ab380fac71042d/screenshots/cap%20proj.PNG)

**❗ Difficultés rencontrées :**
- Mauvais accès aux données au début (`data` au lieu de `data.posts`)
- Besoin de feedback utilisateur, donc ajout de `isLoading` et `error`

---

### 1.2 Implémenter le composant `PostList` pour afficher les posts

**🧐 Explication de la solution :**

Le composant `PostList` reçoit `posts`, `isLoading`, et `error` en props.  
Il affiche :
- Un message de chargement
- Un message d'erreur
- Un message "Aucun post trouvé" si `posts.length === 0`
- Sinon, la liste des titres + extraits des posts

**📷 Capture d’écran :**  
![Affichage des posts](https://github.com/Imane029/tp_react_hooks/blob/7c6930249dfc04f57fcb0aa439ab380fac71042d/screenshots/cap%20proj.PNG)

**❗ Difficultés rencontrées :**
- Utilisation de `post.id` comme `key`
- Troncature du texte avec `substring(0, 150)`

---

### 1.3 Ajouter la fonctionnalité de recherche par titre ou contenu dans `PostSearch`

**🧐 Explication de la solution :**

J'ai créé un composant `PostSearch` avec un champ `input` qui gère son propre `searchTerm`.  
Il appelle `onSearch(term)` (passé en props) à chaque changement.

Dans `App.jsx`, `handleSearch` filtre `posts` (sur `title` et `body`) en insensible à la casse (`toLowerCase()` + `includes()`), et met à jour `filteredPosts`.

**📷 Capture d’écran :**  
![Filtrage](https://github.com/Imane029/tp_react_hooks/blob/1faba5444be2f3803f2ceb83029b5c5e51cca166/screenshots/cap%20proj1.PNG)

**❗ Difficultés rencontrées :**
- Lifting state up entre `PostSearch` et `App`
- Gestion insensible à la casse dans `includes()`
- Reset de la liste quand `searchTerm` est vide

---

## 🧰 Exercice 2 : Hooks Personnalisés

### 🎯 Objectif : Créer des hooks réutilisables

- [ ] 2.1 Créer le hook `useDebounce`
- [ ] 2.2 Créer le hook `useLocalStorage`
- [ ] 2.3 Les utiliser dans l’application

### 2.4 Documenter votre solution ici

✍️ _À compléter..._

---

## 🌟 Exercice 3 : Optimisation et Context

### 🎯 Objectif : Gérer le thème global et optimiser les rendus

### 3.1 Créer le `ThemeContext` pour gérer le thème clair/sombre

**🧐 Explication de la solution :**
J’ai créé un `ThemeContext` dans `src/context/ThemeContext.js` avec `useState` pour stocker le thème (`light` ou `dark`) et fournir une fonction `toggleTheme`. Le contexte est utilisé dans toute l’app via `ThemeProvider`.

### 3.2 Implémenter le composant `ThemeToggle`

Un bouton `ThemeToggle` permet de basculer entre les thèmes. Il utilise `useContext(ThemeContext)` pour appeler `toggleTheme()`.

### 3.3 Utiliser `useCallback` et `useMemo`

J’ai encapsulé certaines fonctions dans `useCallback` pour éviter les re-créations inutiles, et utilisé `useMemo` pour optimiser les valeurs dérivées des données.

### 3.4 Captures d’écran

**📷 Thème clair :**  
![Light mode](https://github.com/Imane029/tp_react_hooks/blob/1faba5444be2f3803f2ceb83029b5c5e51cca166/screenshots/light.PNG)

**📷 Thème sombre :**  
![Dark mode](https://github.com/Imane029/tp_react_hooks/blob/1faba5444be2f3803f2ceb83029b5c5e51cca166/screenshots/dark.PNG)

**❗ Difficultés rencontrées :**
- Application conditionnelle des classes globales
- Gestion de la persistance du thème (à améliorer avec `useLocalStorage`)

---

## 🚀 Exercice 4 : Fonctionnalités avancées

### 🎯 Objectif : Ajouter des fonctionnalités de chargement et détail

### 4.2 Créer le composant `PostDetails` pour afficher les détails d'un post

**🧐 Explication de la solution :**
J’ai créé un composant `PostDetails` accessible via une route dynamique `/posts/:id`. Il utilise `useParams` pour récupérer l’ID du post et `useEffect` pour le charger depuis `https://dummyjson.com/posts/{id}`.

### 4.4 Capture d’écran :

**📷 Vue détaillée d’un post :**  
![Post detail](https://github.com/Imane029/tp_react_hooks/blob/1faba5444be2f3803f2ceb83029b5c5e51cca166/screenshots/detail.PNG)

**❗ Difficultés rencontrées :**
- Gestion de l’ID dynamique avec `useParams`
- Affichage conditionnel pendant le chargement ou si l’ID est invalide

---

## 📁 Structure du projet

```
📁 ./
├─ 📄 README.md
├─ 📄 package.json
├─ 📁 public/
│  └─ 📄 index.html
└─ 📁 src/
   ├─ 📄 App.js
   ├─ 📄 App.css
   ├─ 📁 components/
   │  ├─ 📄 PostList.js
   │  ├─ 📄 PostSearch.js
   │  ├─ 📄 PostDetails.js
   │  ├─ 📄 ThemeToggle.js
   │  └─ 📄 LoadingSpinner.js
   ├─ 📁 hooks/
   │  ├─ 📄 usePosts.js
   │  ├─ 📄 useDebounce.js
   │  ├─ 📄 useLocalStorage.js
   │  └─ 📄 useIntersectionObserver.js
   ├─ 📁 context/
   │  └─ 📄 ThemeContext.js
   ├─ 📄 index.css
   └─ 📄 index.js
```

---

## 🔗 Ressources utiles

- https://dummyjson.com/docs/posts
- https://fr.reactjs.org/docs/hooks-intro.html
- https://fr.reactjs.org/docs/hooks-custom.html
