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
        <h1 onClick={handleAboutUsClick}>IBR Automotive Refrigeration</h1>
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
        <div className='Landing-page'>
          <div className="About-us">
            <h1>About us</h1>
            <p>
              Welcome to IBR Automotive Refrigeration! Located just outside Klerksdorp, we specialize in automotive air-conditioning repairs and installations, providing top-quality compressors and accessories. With extensive experience, our team delivers reliable field service repairs for all makes of tractors, combines, excavators, front-end loaders, and earthmoving equipment. At IBR Automotive Refrigeration, we are committed to keeping your machinery and vehicles running smoothly, wherever you are.
            </p>
          </div>
          <div className='Services'>
          <h1>Services</h1>
          <div className='Images'>
            <a className='Repair' onClick={handleContactClick}>
              <span>Repair and install of auto motive air-conditioning</span>
            </a>
            <a className='Supply' onClick={handleContactClick}>
              <span>Supply of compressors and all accessories</span>
            </a>
          </div>
        </div>
      </div>
      ) : (
        <div className='Contact'>
          <div className="Contact-details">
            <h1>Contact us</h1>
            <p>Phone: +27 78 673 5465</p>
            <p>Email: Louwrens.ibr@gmail.com</p>
          </div>
          <div className='Experience'>
            <h1>Our Work</h1>
            <div className='Exp-img'>
              <div className='photo1'></div>
              <div className='photo2'></div>
              <div className='photo3'></div>
              <div className='photo4'></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
