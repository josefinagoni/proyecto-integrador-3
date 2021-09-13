import React from 'react';
import Movies from './components/Movies/Movies';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <React.Fragment>

    <main>
        
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
