import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; // The CSS file containing styles for all components
import DiscoverPage from './component/DiscoverPage'; 
// Hero Section
const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="overlay">
        <h1 className="hero-title">WELCOME TO ALABAY WORLD</h1>
        <div className="banner">
          <p className="hero-description">
            WHERE THE <span className="highlight">LEGENDARY CENTRAL ASIAN SHEPHERD DOG</span> MEETS A NEW-AGE ADVENTURE.{" "}
            <span className="highlight-join">JOIN US</span> IN CELEBRATING THE{" "}
            <span className="highlight">STRENGTH, LOYALTY, AND HERITAGE</span> OF THE ALABAY BREED.
          </p>
        </div>
      </div>
    </section>
  );
};

// History Section
const HistorySection = () => {
  return (
    <section className="history-section">
      <div className="content-wrapper">
        <div className="text-section">
          <h1 className="history-title">History Of ALABAY</h1>
          <p className="history-description">
            The Central Asian Shepherd Dog, also known as Alabay, has been a guardian of livestock and property for centuries.
            Originating from Central Asia, these dogs are renowned for their courage, strength, and loyalty.
          </p>
        </div>
        <div className="image-section">
          <img src="Alabay-Assets/first-slide.png" alt="Alabay Dog" className="history-image" />
        </div>
      </div>
    </section>
  );
};

// Project Vision Section
const CourseMission = () => {
  return (
    <section className="mission-section">
      <div className="content-wrapper">
        <div className="text-section">
          <h1 className="mission-title">Project Vision</h1>
          <p className="mission-description">
            Our mission is to honor the heritage of Alabay by creating a vibrant, loyal, and powerful community. Just as
            the Alabay protects its flock, we aim to build a pack that stands strong together.
          </p>
        </div>
        <div className="image-section">
          <img src="Alabay-Assets/home-image.png" alt="Alabay Dog" className="mission-image" />
        </div>
      </div>
    </section>
  );
};

// Roadmap Section
const RoadmapSection = () => {
  return (
    <section className="roadmap-section">
      <div className="roadmap-header">
        <h2>Road Map</h2>
        <p>Our journey is just beginning. Explore our roadmap to see the exciting milestones and future plans we have in store.</p>
        <img src="Alabay-Assets/Road-Screen.png" alt="Road Map" className="roadmap-image" />
      </div>
      <div className="roadmap-content">
        <div className="roadmap-stage">
          <img src="Alabay-Assets/community-building.png" alt="Community Building" />
          <h3>Community Building</h3>
        </div>
        <div className="roadmap-stage">
          <img src="Alabay-Assets/merchandise-launch.png" alt="Merchandise Store" />
          <h3>Merchandise Store Launch</h3>
        </div>
        <div className="roadmap-stage">
          <img src="Alabay-Assets/community-events.png" alt="Community Events" />
          <h3>Community Events and Contests</h3>
        </div>
        <div className="roadmap-stage">
          <img src="Alabay-Assets/expansion-features.png" alt="Expansion and New Features" />
          <h3>Expansion and New Features</h3>
        </div>
      </div>
    </section>
  );
};

// Tokenomics Section
const TokenomicsSection = () => {
  return (
    <section className="tokenomics-section">
      <div className="tokenomics-header">
        <h2>Tokenomics</h2>
        <img src="Alabay-Assets/Tokenomics.png" alt="Tokenomics" className="tokenomics-image" />
      </div>
      <div className="tokenomics-content">
        <div className="tokenomics-feature">
          <h3>Liquidity Locked</h3>
          <p>Locked liquidity ensures safe and secure transactions.</p>
        </div>
        <div className="tokenomics-feature">
          <h3>Contract Renounced</h3>
          <p>Ownership renounced to promote decentralization.</p>
        </div>
        <div className="tokenomics-feature">
          <h3>0% Taxes</h3>
          <p>No hidden fees or taxes for a transparent transaction system.</p>
        </div>
      </div>
    </section>
  );
};

// Merchandise Section with Carousel
const merchandiseItems = [
  {
    imgSrc: 'Alabay-Assets/Alabay-Merch/black-hoodie.png',
    title: 'Black Hoodie',
  },
  {
    imgSrc: 'Alabay-Assets/Alabay-Merch/pink-tshirt.png',
    title: 'Pink T-Shirt',
  },
];

const MerchandiseSection = () => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  const handleNext = () => {
    setCurrentItemIndex((prevIndex) => (prevIndex + 1) % merchandiseItems.length);
  };

  const handlePrev = () => {
    setCurrentItemIndex((prevIndex) => (prevIndex === 0 ? merchandiseItems.length - 1 : prevIndex - 1));
  };

  return (
    <section className="merchandise-section">
      <h2>Merchandise</h2>
      <div className="merchandise-content">
        <button onClick={handlePrev} className="arrow-button">&#8592;</button>
        <div className="merchandise-item">
          <img src={merchandiseItems[currentItemIndex].imgSrc} alt={merchandiseItems[currentItemIndex].title} />
          <h3>{merchandiseItems[currentItemIndex].title}</h3>
          <p>Coming Soon...</p>
        </div>
        <button onClick={handleNext} className="arrow-button">&#8594;</button>
      </div>
    </section>
  );
};

// Social Media Links Section
const SocialMediaLinksSection = () => {
  return (
    <section className="social-media-section">
      <h2>Social Media Links</h2>
      
      <div className="social-media-links">
        <a href="https://twitter.com/alabay" target="_blank" rel="noopener noreferrer">
          <img src="Alabay-Assets/twitter-icon.png" alt="Twitter" />
        </a>
        <a href="https://telegram.com/alabay" target="_blank" rel="noopener noreferrer">
          <img src="Alabay-Assets/telegram-icon.png" alt="Telegram" />
        </a>
      </div>
      <img className= "social-media-links-image"src ='Alabay-Assets/Social-media.png'/>
    </section>
  );
};

// Game Zone
const GameZone = () => {
  return (
    <section className="game-zone">
      <h2>GAMES</h2>
      <p>Stay tuned for upcoming games!</p>
      <img src="Alabay-Assets/Alabay-Games/gaurd.png" alt="Guard Dog Game" />
      
       <Link to="/discover">
        <button className="discover-btn">Discover</button>
      </Link>
     
    </section>
  );
};
// Game Preview Section
const GamePreview = () => {
  return (
    <section className="game-preview-section">
      <h2 className="section-title">Game Previews</h2>
      <div className="game-previews">
        <div className="game-card">
          <img src="Alabay-Assets/Alabay-Games/artifacts.png" alt="Artifact Collected" />
          <h3>Artifact Collected</h3>
          <p>Explore the world to collect more!</p>
        </div>
        <div className="game-card">
          <img src="Alabay-Assets/Alabay-Games/Abilities.png" alt="Pungent Poop" />
          <h3>Pungent Poop</h3>
          <p>Unlock and discover new abilities!</p>
        </div>
        <div className="game-card">
          <img src="Alabay-Assets/Alabay-Games/game-3.png" alt="Wrath Hound" />
          <h3>Wrath Hound</h3>
          <p>Call in help to fight towards victory!</p>
        </div>
      </div>
    </section>
  );
};

// Main App Component
const App = () => {
  return (
    <div>
      <HeroSection />
      <HistorySection />
      <CourseMission />
      <RoadmapSection />
      <TokenomicsSection />
      <MerchandiseSection />
      <Router>
      <Routes>
        <Route path="/" element={<GameZone />} />
        <Route path="/discover" element={<DiscoverPage />} />
      </Routes>
    </Router>
      <GamePreview />
      <SocialMediaLinksSection />
    </div>
  );
};

export default App;

