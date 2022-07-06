import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
// STYLES
import styles from "./Cart.module.scss";
// ICONS
import { FaCcMastercard } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcApplePay } from "react-icons/fa";
// CONTEXT
import { TotalPriceContext } from "./../../context/TotalPriceContext/TotalPriceContext";
// COMPONNETS
import Modal from "../modal/Modal";

const Cart = (props) => {
  const navigate = useNavigate();
  const { turistsNo, totalPrice } = useContext(TotalPriceContext);

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
        <div className={styles.total}>
          <img src="https://images.unsplash.com/photo-1489633908075-1c914e8ee5ea?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387"></img>
          <span className={styles.priceLabel}>
            Total Amount for {turistsNo} turists
          </span>
          <span className={styles.price}>${totalPrice}</span>
        </div>

        <div className={styles.payment}>
          <p>Select your payment method:</p>
          <div className={styles.paymet}>
            <FaCcMastercard size={35} />
            <FaCcVisa size={35} />
            <FaCcPaypal size={35} />
            <FaCcApplePay size={35} />
          </div>

          <div>
            <p className={styles.inputName}>Card number</p>{" "}
            <input className={styles.inputs}></input>
            <p className={styles.inputName}>Cardholder's name</p>{" "}
            <input className={styles.inputs}></input>
            <p className={styles.inputName}>Expiration Date</p>{" "}
            <input className={styles.inputs}></input>
            <p className={styles.inputName}>CVV</p>{" "}
            <input className={styles.inputs}></input>
          </div>
          <div className={styles.buttons}>
            <button className={styles.button} onClick={handleClick}>
              Pay
            </button>
            <button className={styles.button} onClick={props.onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
