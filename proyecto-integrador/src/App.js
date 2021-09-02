import React from 'react';
import Header from './components/Header/Header';
import Card from './components/Card/Card'


function App() {
  return (
    <Header/>
    <main>
        <button type="button">Cargar más tarjetas</button>
        <section className="card-container">
          <Card/>
        </section>
    </main>

  );
}

export default App;
