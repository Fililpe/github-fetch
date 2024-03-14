import "./styles.css";

const Header = ({ user, setUser, handleGetData }) => {
  return (
    <div className="src">
      <input
        placeholder="@username"
        name="usuario"
        value={user}
        onChange={(event) => setUser(event.target.value)}
      />
      <button onClick={handleGetData}> Buscar </button>
    </div>
  );
};

export default Header;
