import "./styles.css";

const Connection = ({ photoConnection, nameConnection }) => {
  return (
    <>
      <div className="connection-container">
        <img
          src={photoConnection}
          className="photo-connectios"
          alt="foto das conexões"
        ></img>
        <spam className="name-connection">{nameConnection}</spam>
        <hr />
      </div>
    </>
  );
};

export default Connection;
