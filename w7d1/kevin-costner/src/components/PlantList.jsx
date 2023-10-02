// const plantsArr = [plant1, plant2, plant3, plant4];
// const plant1 = {
//   id: "1",
//   type: "Monsterous plant",
//   name: "Monstera",
//   lastWatered: "2023-09-20",
//   wateringInterval: 7,
// };

import PlantListItem from "./PlantListItem";

export default function PlantList(props) {
  const { plants } = props;
  const plantIsArray = Array.isArray(plants);

  // const parsedPlantListItems = plantsArr.map((plant) => (
  //   <PlantListItem
  //     id={plant.id}
  //     name={plant.name}
  //     type={plant.type}
  //     lastWatered={plant.lastWatered}
  //   />
  // ));

  const parsedPlantListItems =
    plantIsArray && plants.map((plant) => <PlantListItem key={plant.id} {...plant} />);

  return (
    <section>
      <h1>List of current plants</h1>
      {!plantIsArray && <h2>HEY GOT NO PLANTS!</h2>}
      <ul>{parsedPlantListItems}</ul>
    </section>
  );
}
