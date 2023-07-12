import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import '../style/home.css'
import { useCompraContext } from '../hooks/useCompraContext';

import macbook from '../assets/macbook.jpg';
import macstudiolarge from '../assets/macstudiolarge.jpg';
import mac_pro from '../assets/mac_pro.jpg';
import monitores from '../assets/monitores.jpg'

function Home() {
  // const {itens, setItens} = useCompraContext()
  // console.log(itens)
  return (
    <div>
      <Navbar />

      <div className='folder1'>
        <h1>Mac Studio</h1>
        <h5>Com a potência do M2 Max e do M2 Ultra.</h5>
        <Link to="/produtos">Comprar</Link>
        <img src={macstudiolarge} alt="Mac Studio" />
      </div>
      <div className='folder2'>
        <h1>Macbook Air</h1>
        <h5>Alta velocidade e muita bateria.</h5>
        <Link to="/produtos">Comprar</Link>
        <img src={macbook} alt="Macbook Air" style={{ width: "66%" }} /></div>
      <div className='folders' style={{ display: "flex", gap: "20px" }}>
        <div className='folder3'>
          <h1>Mac Pro</h1>
          <h5>Com a revolução do chip da Apple.</h5>
          <Link to="/produtos">Comprar</Link>
          <img src={mac_pro} alt="Mac Pro" /></div>
        <div className='folder4'>
          <h1>Display</h1>
          <h5>Projetando em alta qualidade.</h5>
          <Link to="/produtos">Comprar</Link>
          <img src={monitores} alt="Monitores" style={{ width: "80%", height: "40vh" }} /></div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;


