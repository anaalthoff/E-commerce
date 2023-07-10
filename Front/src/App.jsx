import { useState } from 'react'
import './App.css'
import mac from "./public/mac.png"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import marca from "./public/marca.png";
import segunda from "./public/segunda.png";
import palavra from "./public/palavra.png";
import imagem from "./public/imagem.png";


function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Navbar/>
      <div className="App">
        <header className="App-header">
          <img src={mac} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>

  

          <img src={segunda} className="App-segunda" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>


          
          <img src={palavra} className="App-palavra" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </header>
      </div>
    </>
  );

}

export default App