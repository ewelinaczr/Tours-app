import ExcursionsData from "./../ExcursionsData";
import styles from "./Excursion.module.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useContext, useState } from "react";
import { TotalPriceContext } from "./../../context/TotalPriceContext/TotalPriceContext";
import PersonIcon from "@mui/icons-material/Person";

const Excursion = (props) => {
  const [selected, setSelected] = useState(false);
  const exPrice = Number(props.price.slice(3, 6));
  const { addPrices, removePrices, turistsNo } = useContext(TotalPriceContext);

  const addPriceHandler = () => {
    setSelected((prSt) => !prSt);
    if (!selected) addPrices(exPrice * turistsNo);
    if (selected) removePrices(exPrice * turistsNo);
  };

  return (
    <div className={styles.container}>
      <img className={styles.photo} src={props.photo} alt={props.title}></img>
      <div className={styles.info}>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.time}>
          <AccessTimeIcon />
          {props.duration}
        </div>
        <div>{props.description}</div>
      </div>
      <div className={styles.select}>
        <div>{selected && <p className={styles.sellabel}>selected</p>}</div>
        <div>US${exPrice * turistsNo}</div>
        <div className={styles.selectturists}>
          <div>{turistsNo} </div>
          <PersonIcon />
        </div>
        <button className={styles.button} onClick={addPriceHandler}>
          Select
        </button>
      </div>
    </div>
  );
};

export default Excursion;
