import { Fragment, useRef, useState } from "react";
// STYLES
import styles from "./Hotels.module.scss";
// ICONS
import PoolIcon from "@mui/icons-material/Pool";
import NetworkWifiIcon from "@mui/icons-material/NetworkWifi";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import { AiOutlineStar } from "react-icons/ai";
// COMPONENTS
import HotelCard from "./HotelCard";

function Hotels(props) {
  let cityName = "Hanoi";
  const [hotel, setHotel] = useState({});
  const [hotelName, setHotelName] = useState("");
  const [hotelId, setHotelId] = useState("");
  const [hotelPhoto, setHotelPhoto] = useState([]);

  // var hotelId1;
  // function fetchHotels() {
  // 	const options = {
  // 		method: "GET",
  // 		headers: {
  // 			"X-RapidAPI-Host": "hotels4.p.rapidapi.com",
  // 			"X-RapidAPI-Key": "aa34eaf89dmshde9a73bb7767931p1a275djsn6f384619cdd1",
  // 		},
  // 	};

  // 	fetch(
  // 		"https://hotels4.p.rapidapi.com/locations/v2/search?query=" +
  // 			cityName +
  // 			"&locale=en_US&currency=USD",
  // 		options
  // 	)
  // 		.then((response) => response.json())
  // 		.then((response) => {
  // 			// console.log(response);
  // 			const cityId = response.suggestions[0].entities[0].destinationId;
  // 			// const cityN = response.suggestions[0].entities[0].name;
  // 			// console.log(hotelName);
  // 			// second api
  // 			const options = {
  // 				method: "GET",
  // 				headers: {
  // 					"X-RapidAPI-Host": "hotels4.p.rapidapi.com",
  // 					"X-RapidAPI-Key":
  // 						"aa34eaf89dmshde9a73bb7767931p1a275djsn6f384619cdd1",
  // 				},
  // 			};

  // 			return fetch(
  // 				"https://hotels4.p.rapidapi.com/properties/list?destinationId=" +
  // 					cityId +
  // 					"&pageNumber=1&pageSize=25&checkIn=2023-07-09&checkOut=2023-07-29&adults1=1&sortOrder=" +
  // 					"BEST_SELLER" +
  // 					"&locale=en_US&currency=USD",
  // 				options
  // 			);
  // 		})

  // 		.then((response) => response.json())
  // 		.then((response) => {
  // 			// console.log(response.data.body);
  // 			const hotelName = response.data.body.searchResults.results[0].name;
  // 			hotelId1 = response.data.body.searchResults.results[0].id;
  // 			setHotelName(hotelName);
  // 			const hotelId2 = response.data.body.searchResults.results[1].id;
  // 			// console.log(hotelName);
  // 			// console.log(hotelId1);
  // 			setHotelId(hotelId1);
  // 			// trird api
  // 			const options = {
  // 				method: "GET",
  // 				headers: {
  // 					"X-RapidAPI-Host": "hotels4.p.rapidapi.com",
  // 					"X-RapidAPI-Key":
  // 						"aa34eaf89dmshde9a73bb7767931p1a275djsn6f384619cdd1",
  // 				},
  // 			};

  // 			return fetch(
  // 				"https://hotels4.p.rapidapi.com/properties/get-details?id=" +
  // 					hotelId1 +
  // 					"&checkIn=2023-07-09&checkOut=2023-07-29&adults1=1&currency=USD&locale=en_US",
  // 				options
  // 			);
  // 		})
  // 		.then((response) => response.json())
  // 		.then((response) => {
  // 			// console.log(response);
  // 			let hotelObject = {};
  // 			const foodDrink =
  // 				response.data.body.amenities[0].listItems[0].listItems;
  // 			const toDo = response.data.body.amenities[0].listItems[1].listItems;
  // 			const stars = response.data.body.propertyDescription.starRatingTitle;
  // 			const tag = response.data.body.propertyDescription.tagline[0].slice(
  // 				4,
  // 				-5
  // 			);
  // 			const reviews = response.data.body.guestReviews.brands.formattedRating;
  // 			const reviewsNr = response.data.body.guestReviews.brands.total;
  // 			const checkIn =
  // 				response.data.body.atAGlance.keyFacts.arrivingLeaving[0];
  // 			const guestsReviews =
  // 				response.data.body.guestReviews.brands.formattedScale;
  // 			const checkOut =
  // 				response.data.body.atAGlance.keyFacts.arrivingLeaving[1];
  // 			const services =
  // 				response.data.body.overview.overviewSections[0].content;
  // 			const servicesFree =
  // 				response.data.body.overview.overviewSections[3].content;
  // 			const neighbourhood =
  // 				response.data.body.overview.overviewSections[1].content;
  // 			const address =
  // 				response.data.body.propertyDescription.address.fullAddress;
  // 			const roomType = response.data.body.propertyDescription.roomTypeNames;
  // 			const roomPrice =
  // 				response.data.body.propertyDescription.featuredPrice.currentPrice
  // 					.formatted;
  // 			const roomDescrip1 =
  // 				response.data.body.roomsAndRates.rooms[0].additionalInfo.description;
  // 			const roomDescrip2 =
  // 				response.data.body.roomsAndRates.rooms[0].additionalInfo.details
  // 					.amenities;
  // 			const bedType = response.data.body.roomsAndRates.rooms[0].bedChoices;
  // 			const roomImg =
  // 				response.data.body.roomsAndRates.rooms[0].additionalInfo.images;
  // 			hotelObject = {
  // 				foodDrink: foodDrink,
  // 				toDo: toDo,
  // 				stars: stars,
  // 				tag: tag,
  // 				reviews: reviews,
  // 				reviewsNr: reviewsNr,
  // 				checkIn: checkIn,
  // 				checkOut: checkOut,
  // 				guestsReviews: guestsReviews,
  // 				services: services,
  // 				servicesFree: servicesFree,
  // 				neighbourhood: neighbourhood,
  // 				address: address,
  // 				bedType: bedType,
  // 				roomType: roomType,
  // 				roomPrice: roomPrice,
  // 				roomDescrip1: roomDescrip1,
  // 				roomDescrip2: roomDescrip2,
  // 				roomImg: roomImg,
  // 			};
  // 			// console.log(hotelObject);
  // 			setHotel(hotelObject);

  // 			const options = {
  // 				method: "GET",
  // 				headers: {
  // 					"X-RapidAPI-Host": "hotels4.p.rapidapi.com",
  // 					"X-RapidAPI-Key":
  // 						"aa34eaf89dmshde9a73bb7767931p1a275djsn6f384619cdd1",
  // 				},
  // 			};

  // 			return fetch(
  // 				"https://hotels4.p.rapidapi.com/properties/get-hotel-photos?id=" +
  // 					hotelId1,
  // 				options
  // 			);
  // 		})
  // 		.then((response) => response.json())
  // 		.then((response) => {
  // 			let photos = [];
  // 			const hotelImg1 =
  // 				response.hotelImages[0].baseUrl.slice(0, -10) + "z.jpg";
  // 			const hotelImg2 =
  // 				response.hotelImages[1].baseUrl.slice(0, -10) + "z.jpg";
  // 			const hotelImg3 =
  // 				response.hotelImages[2].baseUrl.slice(0, -10) + "z.jpg";
  // 			photos.push(hotelImg1, hotelImg2, hotelImg3);
  // 			setHotelPhoto(photos);

  // 			// console.log(response);
  // 		})

  // 		.catch((err) => console.error(err));
  // }
  // console.log(hotel);
  // console.log(hotelPhoto);
  //   ///////////////////

  //   function fetchHotel() {
  //     const options = {
  //       method: "GET",
  //       headers: {
  //         "X-RapidAPI-Host": "hotels4.p.rapidapi.com",
  //         "X-RapidAPI-Key": "aa34eaf89dmshde9a73bb7767931p1a275djsn6f384619cdd1",
  //       },
  //     };

  //     fetch(
  //       "https://hotels4.p.rapidapi.com/properties/list?destinationId=" +
  //         1506246 +
  //         "&pageNumber=1&pageSize=25&checkIn=2023-07-09&checkOut=2023-07-29&adults1=1&sortOrder=" +
  //         "GUEST_RATING" +
  //         "&locale=en_US&currency=USD",
  //       options
  //     )
  //       .then((response) => response.json())
  //       .then((response) => {
  //         // console.log(response.data.body);
  //         console.log(response.data.body.searchResults.results[0].id);
  //       })

  //       .catch((err) => console.error(err));
  //   }

  // const handler = () => {
  // 	fetchHotels();
  // 	// fetchHotel();
  // };

  // /////////////
  return (
    <Fragment>
      <div className={styles.container} id="hotels">
        <h1 className={styles.categoryName}>Hotel Description</h1>
        <div className={styles.grid}>
          <div className={styles.description}>
            <div className={styles.maininfo}>
              <div className={styles.cityreviews}>
                <p>Phuket</p>
                <div className={styles.cityreviewsbox}>
                  <AiOutlineStar size={20} />
                  8.8/10 (750 reviews)
                </div>
              </div>
              <p className={styles.hotelname}>My Beach Resort</p>
              {/* <p className={styles.tag}>{hotel.tag}</p> */}
              <p>Panwa Beach, Thailand</p>
              <div className={styles.checkIn}>
                <p>Check in from 2:00 PM</p>
                <p>Check out until 12:00 PM</p>
              </div>
            </div>
            <p className={styles.title}>Facilities</p>
            <div className={styles.facilities}>
              <div>
                <PoolIcon className={styles.facicon} /> Swimming pool
              </div>

              <div>
                <NetworkWifiIcon className={styles.facicon} /> Wifi
              </div>
              <div>
                <BeachAccessIcon className={styles.facicon} /> Beachfront
              </div>
              <div>
                <FamilyRestroomIcon className={styles.facicon} /> Family rooms
              </div>
              <div>
                <LocalBarIcon className={styles.facicon} /> Bar
              </div>
            </div>
            <p className={styles.title}>Description</p>
            <p className={styles.descriptiontext}>
              The My Beach Resort at Coconut Island is located on a private
              beach overlooking the stunning Phang Nga Bay.Phuket island is a
              5-minute boat ride away. The hotel offers a beach getaway from the
              hustle and bustle of the mainland. Accommodations ranges from One
              and Two Bedroom Suites to villas ranging from two to five
              bedrooms. Most rooms feature outdoor pools or hot tubs in private
              gardens. Other activities include tennis, volleyball and mountain
              bikes. Lunch and dining options include Asian and International
              cuisine while the bar deck is perfect for an evening with a
              cocktail over sunset.
            </p>

            <p className={styles.title}>Available rooms</p>
            <HotelCard
              name={"One-Bedroom Pool Villa with Sea View"}
              price={130}
              people={2}
            />
            <HotelCard
              name={"One-Bedroom Suite with Garden View"}
              price={90}
              people={2}
            />
            <HotelCard
              name={"One-Bedroom Suite with Garden View"}
              price={100}
              people={3}
            />
            <HotelCard
              name={"Grand Two-Bedroom Pool Villa with Sea View"}
              price={180}
              people={4}
            />

            <p className={styles.title}>Neighbourhood</p>
            <p>
              Phuket Old Town, Phuket International Airport, Patong
              Beach,Central Festival Phuket Shopping Mall
            </p>
            <div></div>
          </div>

          <div className={styles.photos}>
            <img
              className={styles.photo}
              src="https://images.unsplash.com/photo-1440778303588-435521a205bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="hotel"
            ></img>
            <img
              className={styles.photo}
              src="https://images.unsplash.com/photo-1512100356356-de1b84283e18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=775&q=80"
              alt="hotel"
            ></img>
            <img
              className={styles.photo}
              src="https://images.unsplash.com/photo-1551918120-9739cb430c6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="hotel"
            ></img>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Hotels;
