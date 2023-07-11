
import { createBrowserRouter, RouterProvider  } from "react-router-dom";
import Home from './Home';
import Carrinho from './Carrinho';
import MeuPedido from './MeuPedido';
import App from './App';
import { FormControlStatic } from "react-bootstrap";

function Routes() {

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />
    },
    {
      path: "/pagina",
      element: <Home />
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