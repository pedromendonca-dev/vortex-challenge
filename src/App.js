import { useState } from 'react';
import Formulario from './components/Formulario';
import Logo from './components/Logo';
import './theme/global.css';
import RelatorioFuncionarios from './components/Relatorio';
import SearchBar from './components/Searchbar';

const App = () => {
  const [funcionarios, setFuncionarios] = useState([]);
  const [cargos, setCargos] = useState([])
  const [searchResults, setSearchResultado] = useState([]);

  const Funcionarioslista = (funcionarioform) => {
    setFuncionarios((prevFuncionarios) => [...prevFuncionarios, funcionarioform]);
  };

  const handleSearch = (term, searchMode) => {
    if (term === "") {
      setSearchResultado([]);
      return;
    }

    let resultadosDaBusca = [];

    if (searchMode === "nome") {
      resultadosDaBusca = funcionarios.filter((funcionario) =>
        funcionario.nome && funcionario.nome.toLowerCase().includes(term.toLowerCase())
      );
    } else if (searchMode === "cargo") {
      resultadosDaBusca = funcionarios.filter((funcionario) =>
        funcionario.codigoCargo && funcionario.codigoCargo.includes(term)
      );
    }
    setSearchResultado(resultadosDaBusca); 
  };
  
  return (
    <section className="App">
      <Logo />
      <Formulario Funcionarioslista={Funcionarioslista} cargos={cargos}/>
      <SearchBar onSearch={handleSearch} />
      <RelatorioFuncionarios funcionarios={searchResults.length > 0 ? searchResults : funcionarios} />
    </section>
  );
};

export default App;