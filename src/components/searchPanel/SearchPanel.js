import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
// STYLES
import styles from "./SearchPanel.module.scss";
// CONTEXT
import { TotalPriceContext } from "./../../context/TotalPriceContext/TotalPriceContext";

function SearchPanel(props) {
  const [destination, setDestination] = useState("");
  const [departure, setDeparture] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();
  const { turistsNo, setTuristsNo, increaseGuests, decreaseGuests } =
    useContext(TotalPriceContext);

  // Duration increase/decrease
  const [countDuration, setCountDuration] = useState(10);
  const increaseDuration = () => {
    if (!(countDuration >= 20)) setCountDuration(countDuration + 5);
  };
  const decreaseDuration = () => {
    if (!(countDuration <= 7)) setCountDuration(countDuration - 5);
  };

  const departureHandler = (event) => {
    setDeparture(event.target.value);
  };
  // console.log(departure);

  const destinationHandler = (event) => {
    setDestination(event.target.value);
  };
  // console.log(destination);

  const dateHandler = (event) => {
    setDate(event.target.value);
  };

  // User search query
  const submitHandler = (e) => {
    navigate("/all-tours?sort=search");

    const tourSearch = {
      destination: destination,
      departure: departure,
      date: date,
      duration: countDuration,
      guests: turistsNo,
    };

    props.onSaveSearch(tourSearch);
  };

  return (
    <div onSubmit={submitHandler} className={styles["search-panel"]}>
      <div className={styles["search-panel-inputs"]}>
        {/* destination */}
        <div className={styles["search-destination"]}>
          <p className={styles["search-info"]}>Destination</p>
          <select
            onChange={destinationHandler}
            className={styles["search-select"]}
          >
            <option value="Asia">Asia</option>
            <option value="Vietnam">Vietnam</option>
            <option value="Thailand">Thailand</option>
            <option value="Laos">Laos</option>
            <option value="Singapore">Singapore</option>
            <option value="China">China</option>
            <option value="Cambodia">Cambodia</option>
            <option value="Malaysia">Malaysia</option>
          </select>
        </div>
        {/* departure */}
        <div className={styles["search-destination"]}>
          <p className={styles["search-info"]}>Date</p>
          <input
            className={styles["search-select"]}
            type="month"
            min="2022-06"
            max="2022-08"
            onChange={dateHandler}
          />
        </div>

        <div className={styles["search-departure"]}>
          <p className={styles["search-info"]}>Departure</p>
          <select
            onChange={departureHandler}
            className={styles["search-select"]}
          >
            <option value="Warsaw">Departure</option>
            <option value="Warsaw">Warsaw</option>
            <option value="Cracow">Cracow</option>
          </select>
        </div>
        <div className={styles["search-duration"]}>
          <p className={styles["search-info"]}>Duration</p>
          <div className={styles["search-count-flex"]}>
            <p className={styles["search-count"]}>{countDuration}</p>
            <button onClick={increaseDuration} className={styles["search-add"]}>
              +
            </button>
            <button onClick={decreaseDuration} className={styles["search-add"]}>
              -
            </button>
          </div>
        </div>
        <div className={styles["search-guests"]}>
          <p className={styles["search-info"]}>Guests</p>
          <div className={styles["search-count-flex"]}>
            <p className={styles["search-count"]}>{turistsNo}</p>
            <button onClick={increaseGuests} className={styles["search-add"]}>
              +
            </button>
            <button onClick={decreaseGuests} className={styles["search-add"]}>
              -
            </button>
          </div>
        </div>
      </div>
      <button onClick={submitHandler} className={styles["search-button"]}>
        Search
      </button>
    </div>
  );
}

export default SearchPanel;
