


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const DiscoverPage = () => {

  
    return (
      <section className="discover-page">
        <h1>ALABAY GUARDIAN</h1>
        <h3>SHEPHERD OF THE STEPPES</h3>
        
        <div className="features-section">
          <h4>FEATURES</h4>
          <ul>
            <li>Explore a variety of landscapes, including mountains, forests, deserts, and ancient ruins.</li>
            <li>Use the Alabay's abilities to solve puzzles that involve moving objects, activating mechanisms, or finding hidden clues.</li>
            <li>Discover relics that tell the story of the Alabay's ancestors, each piece contributing to a larger narrative about the breed's role in ancient history.</li>
            <li>Unlock new skills and abilities for the Alabay, enhancing its capacity to explore and solve puzzles.</li>
          </ul>
        </div>
        
        <div className="challenge-modes">
          <h4>Challenge Modes</h4>
          <p><strong>Time Trials:</strong> Compete in special timed challenges where the Alabay must navigate through complex mazes or complete puzzles within a time limit.</p>
          <p><strong>Exploration Mastery:</strong> A mode that rewards players for fully exploring every nook and cranny of the game's world, uncovering all secrets.</p>
        </div>
  
        {/* Action Buttons */}
        <div className="action-buttons">
          <button className="coming-soon-btn">Coming Soon</button>
          <Link to="/">
          <button className="exit-btn">Exit</button>
        </Link>
        </div>
        
      
        <img src="Alabay-Assets/Alabay-Games/gaurd.png" alt="Alabay Guardian" className="game-background" />
      </section>
    );
  };
  
  export default DiscoverPage;
  