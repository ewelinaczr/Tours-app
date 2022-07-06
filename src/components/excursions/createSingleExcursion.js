import Excursion from "./Excursion";

function SingleExcursionCreate(object) {
	return (
		<Excursion
			key={object.id}
			id={object.id}
			photo={object.photo}
			title={object.title}
			duration={object.duration}
			price={object.price}
			description={object.description}
		></Excursion>
	);
}

export default SingleExcursionCreate;
