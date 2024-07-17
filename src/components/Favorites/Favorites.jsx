import { useEffect, useState } from "react";
import "./Favorites.css";
import { getFavoritesByUserId } from "../../services/getPosts";
import { DeleteFavorite } from "../Buttons/DeleteFavorite";
import { Link } from "react-router-dom";

export const Favorites = ({ currentUser }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const favoritesData = await getFavoritesByUserId(currentUser.id);
      setFavorites(favoritesData);
    };

    fetchFavorites();
  }, [currentUser.id, favorites]);

  return (
    <div className="MyFavorites">
      <h2>Favorites</h2>
      {favorites.map((favorite) => (
        <div key={favorite.id} className="post">
          <h3>
            <Link to={`/post-details/${favorite.post.id}`}>
              {favorite.post.title}
            </Link>
          </h3>
          <DeleteFavorite currentPost={favorite} />
        </div>
      ))}
    </div>
  );
};
