import classes from "./mealsDetails.module.css";
import Card from "../../component/UI/Card";
import { useRouter } from "next/router";
import { MongoClient, ObjectId } from "mongodb";

const index = (props) => {
  const router = useRouter();

  function onViewHomeHandeer() {
    router.push("/");
  }
  return (
    <>
      <ul className={classes.list}>
        <li className={classes.item}>
          <Card>
            <div className={classes.image}>
              <img src={props.mealData?.image} alt={props.mealData?.title} />
            </div>
            <div className={classes.content}>
              <h3>{props.mealData?.title} </h3>
              <h2>{props.mealData?.price} </h2>
              <address> {props.mealData?.address} </address>
            </div>
            <div className="actions">
              <button className="btn" onClick={onViewHomeHandeer}>
                {" "}
                view all meal{" "}
              </button>
              <button className="btn"> Add to cart </button>
            </div>
          </Card>
        </li>
      </ul>
    </>
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://Nathjoeetim:T3eJMssZEmea1gyk@cluster0.mgfyjzu.mongodb.net/newMeals?retryWrites=true&w=majority"
  );

  // T3eJMssZEmea1gyk
  const db = client.db();

  const mealCollection = db.collection("meals");

  const meal = await mealCollection.find({}, { _id: 1 }).toArray();

  client.close();
  return {
    fallback: true,
    paths: meal.map((meal) => {
      return {
        params: {
          mealId: meal._id.toString(),
        },
      };
    }),
  };
}

export async function getStaticProps(context) {
  const mealId = context.params.mealId;

  const client = await MongoClient.connect(
    "mongodb+srv://Nathjoeetim:T3eJMssZEmea1gyk@cluster0.mgfyjzu.mongodb.net/newMeals?retryWrites=true&w=majority"
  );
  // T3eJMssZEmea1gyk
  const db = client.db();

  const mealsCollection = db.collection("meals");

  const selectedMeal = await mealsCollection.findOne({
    _id: ObjectId(mealId),
  });

  client.close();

  return {
    props: {
      mealData: {
        id: selectedMeal._id.toString(),
        title: selectedMeal.title,
        address: selectedMeal.address,
        image: selectedMeal.image,
        price: selectedMeal.price,
      },
    },
  };
}

export default index;
