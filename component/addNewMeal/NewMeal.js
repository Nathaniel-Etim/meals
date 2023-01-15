import React from "react";
import classes from "./NewMeal.module.css";
import NewMealForm from "./NewMealForm";
import { useState } from "react";

function NewMeal(props) {
  const [isLoading, setIsLoading] = useState({
    loading: false,
    error: false,
    successful: false,
  });

  return (
    <>
      <div className={classes.messageContainer}>
        {isLoading.successful && (
          <h3 className={classes.Message}> 🟢 successfully sent </h3>
        )}
        {isLoading.error && (
          <h3 className={classes.errorMessage}>
            {" "}
            Could not send your quest pls try again😥{" "}
          </h3>
        )}
      </div>
      <div className={classes.newMeal}>
        <NewMealForm
          onAddMeal={props.onAddMeal}
          onStateHandeler={setIsLoading}
        />
      </div>
    </>
  );
}

export default NewMeal;
