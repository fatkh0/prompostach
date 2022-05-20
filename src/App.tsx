import React, { useState } from 'react';
import './App.css';
import ContainerFluid from './components/ContainerFluid/ContainerFluid';
import ContentContainer from './components/Content/ContentContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';


type TProps = {}

const App: React.FC<TProps> = () => {




  return (
    <div className="App">
      <HeaderContainer />
      <ContentContainer/>
    </div>
  );
}

export default App;
