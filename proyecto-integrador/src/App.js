import React from 'react';
import Movies from './components/Movies/Movies';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <React.Fragment>

    <main>
        <section>
          <Movies />
        </section>
    </main>

    <Footer />

    </React.Fragment>

    
  )
}

export default App;
