import { useContext, useState } from "react";
// STYLES
import styles from "./HotelCard.module.scss";
// ICONS
import PersonIcon from "@mui/icons-material/Person";
import HotelIcon from "@mui/icons-material/Hotel";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import DryCleaningIcon from "@mui/icons-material/DryCleaning";
import KitchenIcon from "@mui/icons-material/Kitchen";
import SmokeFreeIcon from "@mui/icons-material/SmokeFree";
// CONTEXT
import { TotalPriceContext } from "./../../../context/TotalPriceContext/TotalPriceContext";

function HotelCard(props) {
  const [selected, setSelected] = useState(false);
  const { addPrices, prices, removePrices } = useContext(TotalPriceContext);

  const addPriceHandler = () => {
    setSelected((prSt) => !prSt);
    if (selected) addPrices(props.price);
    if (!selected) removePrices(props.price);
  };

  return (
    <div className={styles.roomcard}>
      <div className={styles.carddetail2}>
        <div>
          <PersonIcon className={styles.facicon} />
          <PersonIcon className={styles.facicon} />
          {props.people > 2 && <PersonIcon className={styles.facicon} />}
          {props.people > 3 && <PersonIcon className={styles.facicon} />}
        </div>
        <p>more info</p>
      </div>
      <div className={styles.carddetail}>
        <div className={styles.roomtype}>{props.name}</div>
        <div className={styles.roomequip}>
          <div className={styles.iconsset}>
            <HotelIcon /> One king bed
          </div>
          <div className={styles.iconsset}>
            <AcUnitIcon /> Air-conditioning
          </div>
          <div className={styles.iconsset}>
            <DryCleaningIcon /> Towels
          </div>
          <div className={styles.iconsset}>
            <KitchenIcon /> Refrigerator
          </div>
          <div className={styles.iconsset}>
            <SmokeFreeIcon /> Non-smoking
          </div>
        </div>
      </div>
      <div className={styles.carddetail3}>
        <div>{selected && <p className={styles.sellabel}>selected</p>}</div>
        <p className={styles.price}>US$ {props.price}</p>
        <button onClick={addPriceHandler} className={styles.button}>
          Select
        </button>
      </div>
    </div>
  );
}

export default HotelCard;
