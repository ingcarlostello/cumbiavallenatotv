import React from 'react';
import CaracteristicasCurso from './components/CaracteristicasCurso';
//@ components
import Hero from './components/Hero';
import Profesor from './components/Profesor';
import QueAprenderas from './components/QueAprenderas';

function App() {
  return (
    <>
      <Hero />
      <QueAprenderas />
      <CaracteristicasCurso />
      <Profesor />
    </>
  );
}

export default App;
