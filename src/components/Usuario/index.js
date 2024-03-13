import "./styles.css";

const Usuario = () => {
  return (
    <div class="usuario">
      <img
        src="https://avatars.githubusercontent.com/u/90399125?v=4"
        alt="foto usurio"
      ></img>
      <span class="user_name">Nome: Luiz Filipe</span>
      <hr />
      <span class="user_id">ID: @Fililpe</span>
      <hr />
      <span class="bio">bio: example bio</span>
      <hr />
      <span class="followers">Seguidores: 7</span>
      <hr />
      <span class="following">Seguindo: 18</span>
      <hr />
      <span class="created">Criado em: 09/09/2021</span>
      <hr />
      <span class="updated">Ultima Atualização: 28/02/2024</span>
    </div>
  );
};

export { Usuario };
