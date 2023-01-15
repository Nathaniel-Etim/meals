import Card from "../UI/Card";
import { useRouter } from "next/router";
import classes from "./Mealitem.module.css";

function MealsItem(props) {
  const router = useRouter();

  function onShowMealDetail() {
    router.push("/" + props.id);
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <h2>${props.price}</h2>
          <address>{props.address}</address>
        </div>
        <div className="actions">
          <button className="btn" onClick={onShowMealDetail}>
            Show Details
          </button>
          <button className="btn"> Add to cart </button>
        </div>
      </Card>
    </li>
  );
}

export default MealsItem;
