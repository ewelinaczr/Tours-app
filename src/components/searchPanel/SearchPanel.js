import "./SearchPanel.css";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function SearchPanel(props) {
  const [destination, setDestination] = useState("");
  const [departure, setDeparture] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  // Duration increase/decrease
  const [countDuration, setCountDuration] = useState(10);
  const increaseDuration = () => {
    if (!(countDuration >= 20)) setCountDuration(countDuration + 5);
  };
  const decreaseDuration = () => {
    if (!(countDuration <= 7)) setCountDuration(countDuration - 5);
  };

  // Guests increase/decrease
  const [countGuests, setCountGuests] = useState(1);
  const increaseGuests = () => {
    if (!(countGuests >= 8)) setCountGuests(countGuests + 1);
  };
  const decreaseGuests = () => {
    if (!(countGuests <= 1)) setCountGuests(countGuests - 1);
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
      guests: countGuests,
    };

    props.onSaveSearch(tourSearch);
  };

  // HTML RENDER
  return (
    <div onSubmit={submitHandler} className="search-panel">
      <div className="search-panel-inputs">
        {/* destination */}
        <div className="search-destination">
          <p className="search-info">Destination</p>
          <select onChange={destinationHandler} className="search-select">
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
        <div className="search-destination">
          <p className="search-info">Date</p>
          <input
            className="search-select"
            type="month"
            min="2022-06"
            max="2022-08"
            onChange={dateHandler}
          />
        </div>

        <div className="search-departure">
          <p className="search-info">Departure</p>
          <select onChange={departureHandler} className="search-select">
            <option value="Warsaw">Departure</option>
            <option value="Warsaw">Warsaw</option>
            <option value="Cracow">Cracow</option>
          </select>
        </div>
        <div className="search-duration">
          <p className="search-info">Duration</p>
          <div className="search-count-flex">
            <p className="search-count">{countDuration}</p>
            <button onClick={increaseDuration} className="search-add">
              +
            </button>
            <button onClick={decreaseDuration} className="search-add">
              -
            </button>
          </div>
        </div>
        <div className="search-guests">
          <p className="search-info">Guests</p>
          <div className="search-count-flex">
            <p className="search-count">{countGuests}</p>
            <button onClick={increaseGuests} className="search-add">
              +
            </button>
            <button onClick={decreaseGuests} className="search-add">
              -
            </button>
          </div>
        </div>
      </div>
      <button onClick={submitHandler} className="search-button">
        Search
      </button>
    </div>
  );
}

export default SearchPanel;
