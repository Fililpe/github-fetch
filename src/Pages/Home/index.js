import "./styles.css";
import { useState } from "react";

import { Conexões } from "../../components/Conexões";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";
import Usuario from "../../components/Usuario";
import ItemList from "../../components/ItemList";

const App = () => {
  const [user, setUser] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);

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
    }
  };
  console.log(handleGetData);

  return (
    <div className="App">
      <header>
        <Header user={user} setUser={setUser} handleGetData={handleGetData} />
      </header>
      <div class="estrtura">
        <aside>
          <Usuario currentUser={currentUser} />
        </aside>
        <main>
          {repos?.length ? (
            <div>
              <h4 className="repositorio">Repositórios</h4>
              {repos.map((repo) => (
                <ItemList title={repo.name} description={repo.description} />
              ))}
            </div>
          ) : (
            <p>Nenhum repositório encontrado.</p>
          )}
        </main>
        <section>
          <h1>Suas Conexões</h1>
          <hr />
          <Conexões />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default App;
