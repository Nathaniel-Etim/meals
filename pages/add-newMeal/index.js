// const MongoClient = require("mongodb").MongoClient;
import { useState } from "react";
import NewMeal from "../../component/addNewMeal/NewMeal";

const index = () => {
  const [isLoading, setIsLoading] = useState(false);

  async function addNewNealHandelerFn(formInput) {
    setIsLoading(true);
    const response = await fetch("/api/mealAPI", {
      method: "POST",
      body: JSON.stringify(formInput),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setIsLoading(false);
  }

  return (
    <>
      {/* { <div> LOADING ....</div>} */}
      {<NewMeal onAddMeal={addNewNealHandelerFn} />}
    </>
  );
};

export default index;
