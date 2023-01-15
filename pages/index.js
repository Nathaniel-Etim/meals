import { MongoClient } from "mongodb";

import MealList from "../component/meals/MealList";

function StartingPage(props) {
  const { mealItem } = props;

  if (mealItem.length === 0) {
    return <p className="nomeal"> no meal avalable </p>;
  }

  return (
    <>
      <MealList mealItem={mealItem} />
    </>
  );
}

export async function getStaticProps(context) {
  //  featch data

  const client = await MongoClient.connect(
    "mongodb+srv://Nathjoeetim:T3eJMssZEmea1gyk@cluster0.mgfyjzu.mongodb.net/newMeals?retryWrites=true&w=majority"
  );

  const db = client.db();

  const mealCollection = db.collection("meals");

  const meals = await mealCollection.find().toArray();

  console.log(meals);

  client.close();

  return {
    props: {
      mealItem: meals.map((meals) => {
        return {
          id: meals._id.toString(),
          image: meals.image,
          title: meals.title,
          address: meals.address,
          price: meals.price,
        };
      }),
    },
  };
}

export default StartingPage;
