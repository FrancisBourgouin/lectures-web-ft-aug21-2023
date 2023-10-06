export default function Header(props) {
  const { changeMode } = props;

  return (
    <header className="Header">
      <h1>Super Quiz of Destiny</h1>

      <a href="#" onClick={() => changeMode("VIEW")}>
        View
      </a>
      <a href="#" onClick={() => changeMode("CREATE")}>
        Create
      </a>
    </header>
  );
}
