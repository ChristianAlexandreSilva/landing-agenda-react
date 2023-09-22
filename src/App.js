import AgendaManicure from "./componentes/AgendaManicure";
import Header from "./componentes/cabecalho/header";
import Recursos from "./componentes/Recursos";
import RedesSociais from "./componentes/RedesSociais";
import Rodape from "./componentes/Rodape";
import SessaoDownload from "./componentes/SessaoDownload";
import SessaoPersonalizada from "./componentes/SessaoPersonalizada";
import './Responsividade.css'




function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <AgendaManicure />
        <SessaoDownload />
        <Recursos />
        <SessaoPersonalizada />
        <RedesSociais />
      </main>
      <footer>
        <Rodape />
      </footer>
    </>
  );
}

export default App;
