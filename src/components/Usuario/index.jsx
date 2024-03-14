import "./styles.css";

const Usuario = ({ currentUser }) => {
  if (!currentUser) {
    return <div>Carregando...</div>;
  }
  return (
    <div className="usuario">
      <img src={currentUser.avatar_url} alt="foto usurio"></img>
      <span className="user_name">{currentUser.name}</span>
      <hr />
      <span className="user_id">@{currentUser.login}</span>
      <hr />
      <span className="bio">{currentUser.bio}</span>
      <hr />
      <span className="followers">{currentUser.followers}</span>
      <hr />
      <span className="following">{currentUser.following}</span>
      <hr />
      <span className="created">{currentUser.created_at}</span>
      <hr />
      <span className="updated">{currentUser.updated_at}</span>
    </div>
  );
};

export default Usuario;
