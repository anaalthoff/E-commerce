import React from 'react';
// responsável por renderizar os componentes React no navegador
import ReactDOM from 'react-dom/client';
import Routes from './routes/routes';

// Cria uma raiz do React para a renderização do aplicativo. O método createRoot é usado quando se trabalha com o modo de renderização assíncrono do ReactDOM. Ele recebe um elemento HTML de destino onde o aplicativo React será renderizado.
ReactDOM.createRoot(document.getElementById('root')).render(
  // usado para melhorar a qualidade e a segurança do aplicativo
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);

// Importa as bibliotecas React e ReactDOM, importa o componente Routes de um arquivo específico e, em seguida, renderiza o componente Routes na raiz do aplicativo usando o ReactDOM. O StrictMode é usado para ativar verificações adicionais no código durante o desenvolvimento.