import { createContext, useState } from "react";
import { Data } from "../types";

interface Props {
  children: React.ReactNode;
}
const FavoritesContext = createContext({ favorites: [] as Data[], totalFavorites: 0 });

function FavoritesContextProvider(props: Props) {
  const [userFavorites, setUserFavorites] = useState<Data[]>([]);

  function addFavoriteHandler(favoriteMeetup: Data) {
    setUserFavorites((prevFavorites) => {
      return prevFavorites.concat(favoriteMeetup);
    });
  }

  function removeFavoriteHandler() {}

  function itemIsFavoriteHandler() {}

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
  };
  return <FavoritesContext.Provider value={context}>{props.children} </FavoritesContext.Provider>;
}
