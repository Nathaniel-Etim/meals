import MealsItem from "./MealsItem";
import classes from "./MealList.module.css";

function MealList(props) {
  const { mealItem } = props;

  const meals = mealItem.map((meals) => (
    <MealsItem
      key={meals.id}
      id={meals.id}
      image={meals.image}
      title={meals.title}
      address={meals.address}
      price={meals.price}
    />
  ));

  return (
    <div>
      <ul className={classes.list}>{meals}</ul>
    </div>
  );
}

export default MealList;
