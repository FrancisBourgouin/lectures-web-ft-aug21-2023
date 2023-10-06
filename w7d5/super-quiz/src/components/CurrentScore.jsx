export default function CurrentScore(props) {
  const { points, total } = props;
  return (
    <section className="CurrentScore">
      <h1>{points} points</h1>
      {total && <h2>{Math.round((points / total) * 100)}%</h2>}
    </section>
  );
}
