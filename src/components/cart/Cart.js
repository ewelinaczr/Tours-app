import Modal from "./../modal/Modal";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./Cart.module.css";
import mc from "./mc.png";
import visa from "./visa.png";
import paypal from "./paypal.png";
import gpay from "./gpay.png";
import card from "./card.png";

// import { Prompt } from "react-router-dom";

const Cart = (props) => {
  // After payment navigate to main page
  const navigate = useNavigate();
  function handleClick() {
    navigate("/all-tours");
  }
  // Check if user wants to leave payment form before paying
  const [isEntering, setIsEntered] = useState(false);
  const formFocusedHandler = () => {
    setIsEntered(true);
  };
  return (
    <Modal onClose={props.onClose}>
      {/* <Prompt
        when={isEntering}
        message={(location) =>
          "Are you sure you want to leave? Your payment is not finished."
        }
      /> */}
      <div onFocus={formFocusedHandler} className={styles.form}>
        <div>
          <span>Total Amount</span>
          <span>$69.99 Amount</span>
        </div>
        <div className={styles.payment}>
          <p>Select your payment method:</p>
          <div className={styles.paymet}>
            <img className={styles.icons} src={mc} alt="payment method"></img>
            <img className={styles.icons} src={visa} alt="payment method"></img>
            <img
              className={styles.icons}
              src={paypal}
              alt="payment method"
            ></img>
            <img className={styles.icons} src={gpay} alt="payment method"></img>
          </div>
          <div>
            <div className={styles.cardform}>
              <div className={styles.user}>
                <p>**** **** **** **** 1234</p>
                <p>Card Holder name</p>
                <p>John Smith</p>
                <p>Expiry Date</p>
                <p>2020-20-20</p>
              </div>
            </div>
          </div>
          <div>
            <p>Card number</p> <input className={styles.inputs}></input>
            <p>Cardholder's name</p> <input className={styles.inputs}></input>
            <p>Expiration Date</p> <input className={styles.inputs}></input>
            <p>CVV</p> <input className={styles.inputs}></input>
            <p>Save this card in your account</p>
          </div>
          <div>
            <button onClick={handleClick}>Pay</button>
            <button onClick={props.onClose}>Cancel</button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
