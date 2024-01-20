import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";

function MeetupItem(props: { id: string; title: string; image: string; address: string; description: string }) {
  const favoritCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (Boolean(itemIsFavorite)) {
      favoritCtx.removeFavorite(props.id);
    } else {
      favoritCtx.addFavorite({ id: props.id, title: props.title, image: props.image, address: props.address, description: props.description });
    }
  }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? "Remove from favorites" : "To Favorites"}</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
