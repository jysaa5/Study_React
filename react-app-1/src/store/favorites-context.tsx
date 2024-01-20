import { createContext, useState } from "react";
import { Data } from "../types";

interface Props {
  children: React.ReactNode;
}

export interface Favorites {
  favorites: Data[];
  addFavorite: (favoriteMeetup: Data) => void;
  itemIsFavorite: (meetupId: string) => boolean;
  removeFavorite: (meetupId: string) => void;
  totalFavorites: number;
}

const FavoritesContext = createContext({} as Favorites);

export function FavoritesContextProvider(props: Props) {
  const [userFavorites, setUserFavorites] = useState<Data[]>([]);

  function addFavoriteHandler(favoriteMeetup: Data) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteMeetup);
    });
  }

  function removeFavoriteHandler(meetupId: string) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
    });
  }

  function itemIsFavoriteHandler(meetupId: string) {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };
  return <FavoritesContext.Provider value={context}>{props.children} </FavoritesContext.Provider>;
}

export default FavoritesContext;
