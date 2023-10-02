// const plant1 = {
//   id: "1",
//   type: "Monsterous plant",
//   name: "Monstera",
//   lastWatered: "2023-09-20",
//   wateringInterval: 7,
// };

export default function PlantListItem(props) {
  const { name, type, lastWatered, wateringInterval } = props;

  const checkIfWellWatered = (lastWatered, wateringInterval) => {
    const lastWateredDate = new Date(lastWatered);
    const todayDate = new Date();

    const diffInMs = todayDate.getTime() - lastWateredDate.getTime();
    const diffInS = diffInMs / 1000;
    const diffInDays = diffInS / 86400;

    return diffInDays < wateringInterval;
  };

  const isWellWatered = checkIfWellWatered(lastWatered, wateringInterval);

  const plantStyle = {
    borderColor: isWellWatered ? "#bada55" : "#d00d1e",
  };

  return (
    <li style={plantStyle}>
      <h1>{name}</h1>
      <h2>({type})</h2>
      <p>Last watered on: {lastWatered}</p>
    </li>
  );
}
