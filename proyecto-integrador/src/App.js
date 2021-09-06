import React from 'react';
import Header from './components/Header/Header';
import Movies from './components/Movies/Movies'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <React.Fragment>
    <Header />

    <main>
        <button type="button">Cargar más tarjetas</button>
        <section class="card-container">
          <h3>Top peliculas</h3>
          <Movies />
        

        </section>
    </main>

    <Footer />

    </React.Fragment>

    
  )
}

export default App;
