import { createContext } from "react";

const FavoritesContext = createContext({ favorites: [], totalFavorites: 0 });

function FavoritesContextProvider() {}
