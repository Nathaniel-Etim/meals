import classes from "./newMealForm.module.css";
import { useRouter } from "next/router";
import useBasicHook from "../auth/Auth";
import { useState } from "react";

const NewMealForm = (props) => {
  const router = useRouter();
  const [error, setError] = useState(``);

  const textCheck = (value) => value.trim() !== "";

  const {
    value: titleInput,
    IsValid: titleIsValid,
    IsTouched: titleIsTouched,
    hasError: titleHasError,
    IsTouchedFn: titleFocusFn,
    onChangeHandeler: titleOnChangeHandelerFn,
    resetFn: clearTitleInputFn,
  } = useBasicHook(textCheck);
  const titleHasNoError = titleIsTouched && !titleIsValid;

  const {
    value: imageInput,
    IsValid: imageIsValid,
    IsTouched: imageIsTouched,
    hasError: imageHasError,
    IsTouchedFn: imageBlurfn,
    onChangeHandeler: onChangeImageHandelerFn,
    resetFn: clearImageInputFn,
  } = useBasicHook(textCheck);
  const imageHasNoError = imageIsTouched && !imageIsValid;

  const {
    value: addressInput,
    IsValid: addressIsValid,
    IsTouched: addressIsTouched,
    hasError: addressHasError,
    IsTouchedFn: addressBlurFn,
    onChangeHandeler: onChangeAddressHandelerFn,
    resetFn: clearAddressInputFn,
  } = useBasicHook(textCheck);
  const addressHasNoError = addressIsTouched && !addressIsValid;

  const {
    value: priceInput,
    IsValid: priceIsValid,
    IsTouched: priceIsTouched,
    hasError: priceHasError,
    IsTouchedFn: priceBlurFn,
    onChangeHandeler: onChangePriceHandelerFn,
    resetFn: clearPriceInputFn,
  } = useBasicHook(textCheck);
  const PriceHasNoError = priceIsTouched && !priceIsValid;

  const formHasError = titleIsValid && imageIsValid && addressIsValid;

  function onSubmitFormHandeler(e) {
    e.preventDefault();

    if (!formHasError) {
      setError(`check input and submit again`);
      props.onStateHandeler({
        loading: false,
        error: true,
        successful: false,
      });
      console.log(error);
      return;
    }

    const newMealUpdate = {
      title: titleInput,
      image: imageInput,
      address: addressInput,
      price: priceInput,
    };
    props.onStateHandeler({
      loading: false,
      error: false,
      successful: true,
    });
    props.onAddMeal(newMealUpdate);

    clearTitleInputFn();
    clearImageInputFn();
    clearAddressInputFn();
    clearPriceInputFn();
    router.push("/");
  }

  return (
    <form className={classes.formContainer}>
      <div className={classes.logo}>
        <h3 className={classes.Name}> dTb </h3>
        <h4 className={classes.text}> dTb add meal form </h4>
      </div>
      <div className={classes.input}>
        <label className={classes.labelArea}> Title </label>
        {titleHasNoError && (
          <div className={classes.errormessagecontainer}>
            <p className={classes.errormessage}> Title can't be left empty </p>
          </div>
        )}
        <input
          type="text"
          className={classes.inputArea}
          onBlur={titleFocusFn}
          value={titleInput}
          onChange={titleOnChangeHandelerFn}
        />
      </div>
      <div className={classes.input}>
        <label className={classes.labelArea}> Image </label>
        {imageHasNoError && (
          <div className={classes.errormessagecontainer}>
            <p className={classes.errormessage}> image can't be left empty </p>
          </div>
        )}
        <input
          className={classes.inputArea}
          type="url"
          value={imageInput}
          onBlur={imageBlurfn}
          onChange={onChangeImageHandelerFn}
        />
      </div>
      <div className={classes.input}>
        <label className={classes.labelArea}> Address </label>
        {addressHasNoError && (
          <div className={classes.errormessagecontainer}>
            <p className={classes.errormessage}> Invalid Detail </p>
          </div>
        )}
        <input
          className={classes.inputArea}
          type="text"
          value={addressInput}
          onBlur={addressBlurFn}
          onChange={onChangeAddressHandelerFn}
        />
      </div>
      <div className={classes.input}>
        <label className={classes.labelArea}> Price </label>
        {PriceHasNoError && (
          <div className={classes.errormessagecontainer}>
            <p className={classes.errormessage}> insert a figure </p>
          </div>
        )}
        <input
          type="number"
          className={classes.inputArea}
          value={priceInput}
          onBlur={priceBlurFn}
          onChange={onChangePriceHandelerFn}
        />
      </div>
      <div className={classes.btncontainer}>
        <button className="submmit" onClick={onSubmitFormHandeler}>
          {" "}
          Submit Form{" "}
        </button>
      </div>
    </form>
  );
};

export default NewMealForm;
