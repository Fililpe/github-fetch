import "./styles.css";

const Usuario = ({ currentUser }) => {
  if (!currentUser) {
    return null;
  }
  return (
    <div className="usuario">
      <img src={currentUser.avatar_url} alt="foto usurio"></img>
      <span className="user_name">{currentUser.name}</span>
      <span className="user_id">@{currentUser.login}</span>
      <span className="bio">Bio:{currentUser.bio}</span>
      <span className="followers">Seguidores: {currentUser.followers}</span>
      <span className="following">Seguindo: {currentUser.following}</span>
      <span className="created">
        Criado em: <br />
        {currentUser.created_at}
      </span>
      <span className="updated">
        Ultima Atualização: <br />
        {currentUser.updated_at}
      </span>
    </div>
  );
};

export default Usuario;
