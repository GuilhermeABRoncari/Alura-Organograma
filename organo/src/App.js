import { useState } from 'react';
import Banner from './componentes/Banner';
import Forumlario from './componentes/Formulario';

function App() {

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log('Novo colaborador => ', colaborador);
    setColaboradores([...colaboradores, colaborador]);
  }

  return (



    <div className="App">
      <Banner/>
      <Forumlario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
    </div>
  );
}

export default App;
