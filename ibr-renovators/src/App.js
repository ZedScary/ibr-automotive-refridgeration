import './App.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faPhone, faCircleInfo);

function App() {
  const [showContact, setShowContact] = useState(false);

  const handleContactClick = (event) => {
    event.preventDefault();
    setShowContact(true);
  };

  const handleAboutUsClick = (event) => {
    event.preventDefault();
    setShowContact(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>IBR RENOVATORS</h1>
        <div className="Header-buttons">
          {!showContact ? (
          <a href="#" className='Contact-us' onClick={handleContactClick}>
            <FontAwesomeIcon icon="fa-solid fa-phone" />
            <span> Contact us</span>
          </a>
          ) : (
            <a href="#" className='Contact-us' onClick={handleAboutUsClick}>
            <FontAwesomeIcon icon="fa-solid fa-circle-info" />
            <span> About us</span>
          </a>  
          )}
        </div>
      </header>

      {!showContact ? (
        <div className="About-us">
          <h1>About us</h1>
          <p>
            Welcome to IBR Renovators! Located just outside Klerksdorp, we specialize in automotive air-conditioning repairs and installations, providing top-quality compressors and accessories. With extensive experience, our team delivers reliable field service repairs for all makes of tractors, combines, excavators, front-end loaders, and earthmoving equipment. At IBR Renovators, we are committed to keeping your machinery and vehicles running smoothly, wherever you are.
          </p>
        </div>
      ) : (
        <div className="Contact-details">
          <h1>Contact us</h1>
          <p>Phone: +27 78 673 5465</p>
          <p>Email: Louwrens.ibr@gmail.com</p>
        </div>
      )}

      <div className='Services'>
        <h1>Services</h1>
        <div className='Images'>
          <a className='Repair' href='/'>
            <span>Repair and install of auto motive air-conditioning</span>
          </a>
          <a className='Supply' href='/'>
            <span>Supply of compressors and all accesspries</span>
          </a>
          <a className='Field-repair' href='/'>
            <span>Field service repair</span>
          </a>
        </div>
      </div>

    </div>
  );
}

export default App;
