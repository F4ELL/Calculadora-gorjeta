import react, { useState } from "react";
import styled from 'styled-components'

const Input = styled.input`
  width: 300px;
  padding: 10px;
  border: 2px solid black;
  font-size: 16px;
`;


function App() {

  const [ conta, setConta ] = useState('0');
  const [ porcentagem, setPorcentagem ] = useState('10');

  const handleConta = (e) => {
    setConta(e.target.value);
  }

  const handlePorcentagem = (e) => {
    setPorcentagem(e.target.value);
  }

  return (
    <>
      <h1>Calculadora de Gorjetas</h1>

      <p>Valor da conta:</p>
      <Input type="number" value={conta} onChange={handleConta}/>

      <p>Porcentagem da gorjeta:</p>
      <Input type="number" value={porcentagem} onChange={handlePorcentagem}/>

      <hr/>

      {parseFloat(conta) > 0 &&
        <>
          <p>Sub-total: R$ {conta}</p>
          <p>Gorjeta({porcentagem}%): R$ {(conta * (parseFloat(porcentagem) / 100)).toFixed(2)}</p>
          <p><strong>Total: R$ { (parseFloat(conta) + (conta * (parseFloat(porcentagem) / 100))).toFixed(2) }</strong></p>
        </>
      }
    </>
  );
}

export default App;
