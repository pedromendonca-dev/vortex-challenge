import './relatorio.css'

import React from "react";

const RelatorioFuncionarios = ({ funcionarios }) => {
  const somaTotalSalarios = funcionarios.reduce((total, funcionario) => {
    return total + parseFloat(funcionario.salario);
  }, 0);

  return (
    <div className="relatorio-container">
      <table>
        <thead>
          <tr>
            <th className='cabeçalho-container'>ID</th>
            <th className='cabeçalho-container'>Matrícula</th>
            <th className='cabeçalho-container'>Nome</th>
            <th className='cabeçalho-container'>Cargo</th>
            <th className='cabeçalho-container'>Salário</th>
          </tr>
        </thead>
        <tbody>
          {funcionarios.map((funcionario) => (
          <tr key={funcionario.id}>
            <td>{funcionario.id}</td>
            <td>{funcionario.matricula}</td>
            <td>{funcionario.nome}</td>
            <td>{funcionario.codigoCargo}</td>
            <td>{funcionario.salario}</td>
          </tr>
        ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4" className='resultado'>Total</td>
            <td>{somaTotalSalarios.toFixed(2)}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default RelatorioFuncionarios;