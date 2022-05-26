import React, { useState } from 'react';
import './App.css';
import ContentContainer from './components/Content/ContentContainer';
import FooterContainer from './components/Footer/FooterContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';


type TProps = {}

const App: React.FC<TProps> = () => {




  return (
    <div className="App flex flex-col h-screen justify-between">
      <header className=' w-screen'>
        <HeaderContainer />
      </header>
      <section className='text-justify mb-auto'>
        <ContentContainer/>
      </section>

      <footer className='mt-10'>
        <FooterContainer />
      </footer>
    </div>
  );
}

export default App;
