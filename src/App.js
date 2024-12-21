import Navi from './Components/Navbar.js';
import About from './Components/About.js';
import Events from './Components/Events.js';
import CallToAction from './Components/CallToAction.js';
import CarouselComponent from './Components/CarouselComponent.js';

function App() {
  return (
    <div className="App">
      <h1 className='no-mob'>Farmin' It!</h1>
      <Navi />
      <header className="App-header">
        <section className='mobile-center'>
          <CarouselComponent />
        <div className='intro'>
          <hr />
          <h1 className='section-title'>Why Should I?</h1>
          <p>Well, for one the food is clean and tastes better. Also generally much cheaper!</p>
        </div>
          <About />
          <Events />
          <CallToAction />
        </section>
      </header>
    </div>
  );
}

export default App;
