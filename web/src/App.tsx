// Componentes no React são funções que retornam conteúdo html (JSX)
// Propriedades (variáveis com um tipo) são feitas através de um interface {} e chamadas na função.
import React from 'react';

import './styles/global.css';

import Routes from './routes';

function App() {
  return (
    <Routes />
  );
}

export default App;
