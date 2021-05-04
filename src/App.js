import { useEffect, useState } from "react";
import useCep from "react-hook-usecep";
import "./App.css";

const App = () => {
  const [cepStatus, setCep] = useCep();
  const [cepData, setCepData] = useState();

  useEffect(() => {
    setCepData(cepStatus.data);
  }, [cepStatus]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Digite o CEP abaixo</h1>
        <input
          className="App-input"
          onBlur={(event) => setCep(event.target.value)}
        />
        {cepData && (
          <div className="App-cep-infos">
            <span>{cepData.logradouro}</span>
            <span>{cepData.bairro}</span>
            <span>{cepData.localidade}</span>
            <span>{cepData.cep}</span>
          </div>
        )}
      </header>
    </div>
  );
};

export default App;
