import React from 'react';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer'


function App() {
  return (
    <React.Fragment>
    <Header />

    <main>
        <button type="button">Cargar más tarjetas</button>
        <section class="card-container">
        <Card />

        </section>
    </main>

    <Footer />

    </React.Fragment>

    
  )
}

export default App;
