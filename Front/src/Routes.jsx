
import { createBrowserRouter, RouterProvider  } from "react-router-dom";
import Home from './Home';
import Carrinho from './Carrinho';
import MeuPedido from './MeuPedido';
import App from './App';

function Routes() {

const router = createBrowserRouter([
    {
      path: "*",
      element: <App />
    },
    {
      path: "/pagina",
      element: <Home />
    },
    {
      path: "/app",
      element: <App />
    },
    {
      path: "/carrinho",
      element: <Carrinho />
    },
    {
      path: "/meupedido",
      element: <MeuPedido />
    },
  ]);
  return (
    <>
      
    <RouterProvider router={router}/>
    </>
  )
}

export default Routes