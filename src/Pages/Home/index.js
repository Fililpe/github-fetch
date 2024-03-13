import "./styles.css";
import { useState } from "react";

import { Usuario } from "../../components/Usuario";
import { Conexões } from "../../components/Conexões";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import ItemList from "../../components/ItemList";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div class="estrtura">
        <aside>
          <Usuario />
        </aside>
        <main>
          <ItemList />
        </main>
        <section>
          <h1>Suas Conexões</h1>
          <hr />
          <Conexões />
          <Conexões />
          <Conexões />
          <Conexões />
          <Conexões />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default App;
