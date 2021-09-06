import React from 'react';
import Header from './components/Header/Header';
<<<<<<< HEAD
import Movies from './components/Movies/Movies'
=======
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer'
>>>>>>> 97ff5a8a5829c6a4bfe4233e88266e98a82118fa


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
