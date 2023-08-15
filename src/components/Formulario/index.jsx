import { useState } from "react";
import './formulario.css'
import './../Button'
import Button from "./../Button"

const Formulario = ({Funcionarioslista,cargos}) => {

  const [SelecionarFormulario, setSelecionarFormulario] = useState("funcionario");
  const [CargosCadastrados, setCargosCadastrados] = useState([]);
  const[FuncionarioCadastrado, setFuncionariosCadastrados] = useState([]);
  const[Matricula, setMatriculaFuncionario] = useState('');
  const[NomedoFuncionario, setNomeFuncionario] = useState('');
  const[CodigoCargoFuncionario, setCodigoCargoFuncionario] = useState('');
  const[SalarioFuncionario, setSalarioFuncionario] = useState ('')
  const[idCount,setIDCounter] = useState(1)
  

    const handleSelecionador = (event) => {
    setSelecionarFormulario(event.target.value);
  };






  const handleFuncionarioSubmit = (event) =>{
    event.preventDefault();
    
    
    const matriculaExistente = FuncionarioCadastrado.some(funcionario => funcionario.matricula === Matricula);
  
  if (matriculaExistente) {
    alert("Já existe um funcionário com essa matrícula. Por favor, escolha outra matrícula.");
    return;
  }
  
  const cargoExistente = CargosCadastrados.find(cargo => cargo.codigo=== CodigoCargoFuncionario);
  
  if (cargoExistente) {
    const novoFuncionario = {
      id: idCount,
      matricula: Matricula,
      nome: NomedoFuncionario,
      codigoCargo: CodigoCargoFuncionario,
      salario: SalarioFuncionario
    };
    
    setFuncionariosCadastrados((prevFuncionarios) => [...prevFuncionarios, novoFuncionario]);
    setIDCounter(idCount + 1);
    event.target.reset();
    Funcionarioslista(novoFuncionario);
    alert('Funcionario foi cadastrado com sucesso')
  } else {
    alert("O código do cargo informado não existe. Cadastre o cargo primeiro.");
  }
};






const handleCargoSubmit = (event) => {
  event.preventDefault();
  const cargodoCadastro = event.target.cargodoCadastro.value;
  const salariodoCadastro = event.target.salariodoCadastro.value;

  const cargoExistente = CargosCadastrados.find(cargo => cargo.codigo === cargodoCadastro);

  if (cargoExistente) {
    alert("Já existe um cargo com esse código. Por favor, escolha outro código.");
  } else {
    const novoCargo = {
      codigo: cargodoCadastro,
      salario: salariodoCadastro,
    };
    setCargosCadastrados((prevCargos) => [...prevCargos, novoCargo]);
    alert('Cargo foi cadastrado com sucesso.')
    event.target.reset();
  }
};
  


  return (
      <section className="formulario-container">
      <div>
        <select value={SelecionarFormulario} onChange={handleSelecionador} className="selecionador">
          <option value="funcionario">Funcionario</option>
          <option value="cargo">Cargo</option>
        </select>
      </div>
      {SelecionarFormulario === "funcionario" && (
      <form onSubmit={handleFuncionarioSubmit}>
        <div className="campo-container">
          <h2> Preencha os dados para registrar o colaborador.</h2>
          <label>
            <p>Matricula:</p>
            <input 
              type='number' 
              placeholder="Digite sua matricula"
              onChange={(event)=> setMatriculaFuncionario(event.target.value)}
              required
            />
          </label>
          <label>
            <p>Nome do Funcionário:</p>
            <input 
              type='text' 
              placeholder="Digite seu nome"
              onChange={(event)=>setNomeFuncionario(event.target.value)}
              required
            />
          </label>
          <label>
            <p>Código do Cargo:</p>            
            <input 
              type='number'
              required
              onChange={(event) => {
                setCodigoCargoFuncionario(event.target.value);
                const cargo = CargosCadastrados.find(cargo => cargo.codigo === event.target.value);
                if (cargo) {
                  setSalarioFuncionario(cargo.salario);
                }
              }
            }
            />
          </label>
          <Button>Registrar Funcionário</Button>
        </div>
      </form>
      )}

    {SelecionarFormulario === "cargo" && (
      <form onSubmit={handleCargoSubmit}>
        <div className="campo-container">
          <h2> Cadastrar Novo Cargo:</h2>
          <label>
            Codigo do Cargo:
            <input
              type="number"
              name='cargodoCadastro'
              placeholder="Digite o codigo do cargo"
              required
            />
          </label>
          <label>
            Salário do Cargo:
            <input
              type="number"
              name='salariodoCadastro'
              placeholder="Digite o valor do salário"
              required
            />
          </label>
          <Button>Registrar</Button>
        </div>
      </form>
    )}
    </section>
  )
}

export default Formulario;