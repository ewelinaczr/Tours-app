import React, { useContext, useEffect } from "react";
import { Fragment, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
// STYLES
import styles from "./AllTours.module.scss";
// DATA
import Data from "./../TripPreviewData";
// COMPONENTS
import createTripPreview from "./../createTripPreview/TripPreviewCreate";
import Search from "../search/Search";
// CONTEXT
import LikeContext from "./../../context/LikeContext/LikeContext";

function AllTours() {
  const [searchQuery, setSearchQuery] = useState("");
  const [favourites, setFavourites] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [noData, setNoData] = useState(false);
  const { likes } = useContext(LikeContext);
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const querParams = new URLSearchParams(location.search);
  let favouriteTours = [];

  // PROPS FROM CHILD COMPONENT - SEARCH QUERY
  const saveSearchDataHandler = (enteredSearchData) => {
    setSearchQuery(enteredSearchData);
  };

  // NAVIGATE TO ROUTES
  const filterLowestPriceHandler = () => {
    navigate("/all-tours?sort=lowest-price");
  };
  const filterBestRatedHandler = () => {
    navigate("/all-tours?sort=best-rated");
  };
  const filterFavouriteHandler = () => {
    navigate("/all-tours?sort=favourite");
  };
  const filterAllHandler = () => {
    navigate("/all-tours?sort=all");
  };

  // SORTING DATA METHODS
  const sortBestRated = (tours) => {
    return tours.sort((tourA, tourB) => {
      return Number(tourA.rating) > Number(tourB.rating) ? -1 : 1;
    });
  };
  const sortLowestPrice = (tours) => {
    return tours.sort((tourA, tourB) => {
      return Number(tourA.cost.slice(1, 4)) > Number(tourB.cost.slice(1, 4))
        ? 1
        : -1;
    });
  };
  const sortAll = (tours) => {
    return tours.sort((tourA, tourB) => {
      return Number(tourA.id) > Number(tourB.id) ? -1 : 1;
    });
  };

  useEffect(() => {
    // GET FAVOURITE TOURS FROM CONTEXT
    for (const [i, el] of likes.entries()) {
      favouriteTours.push(Data[el]);
      setFavourites(favouriteTours);
    }
    // CALL METHODS DEPENDING ON ROUTES
    if (querParams.get("sort") === "best-rated") {
      setSortedData(sortBestRated(Data));
    } else if (querParams.get("sort") === "lowest-price") {
      setSortedData(sortLowestPrice(Data));
    } else if (querParams.get("sort") === "all") {
      setSortedData(sortAll(Data));
    } else if (querParams.get("sort") === "favourite") {
      setSortedData(favourites);
    } else if (querParams.get("sort") === "search") {
      if (searchQuery === undefined) {
        setSortedData([]);
      } else {
        setSortedData(searchQuery);
      }
    }
    setNoData(false);
    if (sortedData === undefined || sortedData.length === 0) {
      setNoData(true);
    }
  }, [searchQuery, params, sortedData, likes]);

  return (
    <Fragment>
      <Search onSaveSearch={saveSearchDataHandler} />
      <div className={styles["search-sort"]}>
        <p className={styles.filter} onClick={filterAllHandler}>
          All
        </p>
        <p className={styles.filter} onClick={filterBestRatedHandler}>
          Best rated
        </p>
        <p className={styles.filter} onClick={filterLowestPriceHandler}>
          Lowest price
        </p>

        <p className={styles.filter} onClick={filterFavouriteHandler}>
          Favourite
        </p>
      </div>

      <div className={styles.container}>
        {noData && (
          <div className={styles["no-results"]}>
            <p className={styles["no-data"]}>
              Tours not found. Try to change criteria.
            </p>
          </div>
        )}
        {!noData && (
          <div className={styles["trip-preview"]}>
            {(sortedData || Data).map(createTripPreview)}
          </div>
        )}
      </div>
    </Fragment>
  );
}

export default AllTours;
