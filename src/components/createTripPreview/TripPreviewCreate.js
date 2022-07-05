import TripPreview from "./../tripPreview/TripPreview";

function createTripPreview(object) {
  return (
    <TripPreview
      key={object.id}
      id={object.id}
      destination={object.destination}
      photo={object.photo}
      rating={object.rating}
      bestseller={object.bestseller}
      lastMinute={object.lastMinute}
    ></TripPreview>
  );
}

export default createTripPreview;
