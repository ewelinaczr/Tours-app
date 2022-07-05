// STYLES
import styles from "./Search.module.scss";
// DATA
import Data from "./../TripPreviewData";
// COMPONENTS
import SearchPanel from "./../searchPanel/SearchPanel";

function Search(props) {
  //  TAKE QUERY FROM CHILD COMPONENT
  const saveSearchDataHandler = (enteredData) => {
    console.log(enteredData);

    // FIND/FILTER QUERY INA DATA
    let findTour = () => {
      for (let el of Data) {
        if (
          el.destination === enteredData.destination &&
          el.departure === enteredData.date &&
          el.airport === enteredData.departure
        ) {
          return el;
        }
      }
    };

    let query = findTour();
    console.log([query]);

    // PASS QURY TO PARENT COMPONENT
    props.onSaveSearch([query]);
  };

  return (
    <div>
      <div className={styles.search}>
        <SearchPanel onSaveSearch={saveSearchDataHandler}></SearchPanel>
      </div>
    </div>
  );
}

export default Search;
