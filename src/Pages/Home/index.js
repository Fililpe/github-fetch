import "./styles.css";
import { useState } from "react";

import { Footer } from "../../components/Footer";
import Header from "../../components/Header";
import Usuario from "../../components/Usuario";
import Connection from "../../components/Connection";
import ItemList from "../../components/ItemList";

const App = () => {
  const [user, setUser] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);
  const [connect, setConnect] = useState(null);

  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json();

    if (newUser.name) {
      const {
        avatar_url,
        name,
        bio,
        login,
        followers,
        following,
        created_at,
        updated_at,
      } = newUser;
      setCurrentUser({
        avatar_url,
        name,
        bio,
        login,
        followers,
        following,
        created_at,
        updated_at,
      });

      const reposData = await fetch(
        `https://api.github.com/users/${user}/repos`
      );
      const newRepos = await reposData.json();

      if (newRepos.length) {
        setRepos(newRepos);
      }

      const connectionsData = await fetch(
        `https://api.github.com/users/${user}/followers`
      );
      const newConnections = await connectionsData.json();
      if (newConnections.length) {
        setConnect(newConnections);
      }
    }
  };

  return (
    <div className="App">
      <header>
        <Header user={user} setUser={setUser} handleGetData={handleGetData} />
      </header>
      <div class="estrutura">
        <aside>
          <Usuario currentUser={currentUser} />
        </aside>
        <main>
          {repos?.length ? (
            <div>
              <h1 className="repositorio">Repositórios</h1>
              {repos.map((repo) => (
                <ItemList title={repo.name} description={repo.description} />
              ))}
            </div>
          ) : (
            <div className="empty">Pesquise Por Algum Usuário Github</div>
          )}
        </main>
        <section>
          {connect?.length ? (
            <div>
              <h2>Suas Conexões</h2>
              {connect.map((connected) => (
                <Connection
                  photoConnection={connected.avatar_url}
                  nameConnection={connected.login}
                />
              ))}
            </div>
          ) : null}
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default App;
