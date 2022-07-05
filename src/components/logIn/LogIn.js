import { Fragment } from "react";
import styles from "./LogIn.module.scss";
// import user from "./person.png";
// import lock from "./lock.png";
import gg from "./gg.png";
import fb from "./fb.png";
import useInput from "../../hooks/useInput";
// console.log(fb);

const LogIn = (props) => {
  const {
    val: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valInputChangeHandler: nameInputChangeHandler,
    valInputBlurHandler: nameInputBlurHandler,
    reset: resetNameInput,
  } = useInput((val) => val.trim() !== "");

  const {
    val: enteredPass,
    isValid: enteredPassIsValid,
    hasError: passInputHasError,
    valInputChangeHandler: passInputChangeHandler,
    valInputBlurHandler: passInputBlurHandler,
    reset: resetPassInput,
  } = useInput((val) => val.trim() !== "");

  let formIsValid = false;

  if (enteredNameIsValid && enteredPassIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid || !enteredPassIsValid) {
      return;
    }
    console.log(enteredName);
    console.log(enteredPass);
    resetPassInput();
    resetNameInput();
  };

  const inputPassClasses = passInputHasError ? styles.inputInv : styles.input;
  const inputNameClasses = nameInputHasError ? styles.inputInv : styles.input;

  return (
    <Fragment>
      <div className={styles.grid}>
        <img
          className={styles.img}
          src="https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
          alt="holidays"
        ></img>

        <form className={styles.form} onSubmit={formSubmitHandler}>
          <div>
            <p className={styles.welcome}>Welcome Back!</p>
            <p className={styles.welc}>Log in to your account!</p>
          </div>

          <div className={styles.inputs}>
            Username/Email
            <input
              onChange={nameInputChangeHandler}
              onBlur={nameInputBlurHandler}
              value={enteredName}
              className={inputNameClasses}
              type="text/email"
              placeholder=""
              id={styles.user}
            />
            {nameInputHasError && (
              <p className={styles.error}>
                Please enter a valid name or email.
              </p>
            )}
            Password
            <input
              onChange={passInputChangeHandler}
              onBlur={passInputBlurHandler}
              value={enteredPass}
              className={inputPassClasses}
              type="password"
              placeholder=""
              id={styles.lock}
            />{" "}
            {passInputHasError && (
              <p className={styles.error}>Please enter a valid password.</p>
            )}
          </div>

          <div className={styles.remember}>
            <div className={styles.togge}>
              <label className={styles.switch}>
                <input type="checkbox"></input>
                <span className={styles.slider}></span>
              </label>
              <p>Remember</p>
            </div>
            <div>Forgot password?</div>
          </div>
          <div className={styles.confirm}>
            <button disabled={!formIsValid} className={styles.button}>
              Log in
            </button>
          </div>

          <div className={styles.connect}>
            <p>Or connect using</p>
            <div>
              <img className={styles.socialmedia} src={fb} alt="fb logo"></img>
              <img
                className={styles.socialmedia}
                src={gg}
                alt="google logo"
              ></img>
            </div>
          </div>

          <div>
            Dont't have account?
            <span className={styles.signup}>Sign UP</span>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default LogIn;
