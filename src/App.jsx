import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { sculptureList } from './data';
import './scss/App.scss';
import './scss/Buttons.scss';

function App() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const handleNext = () => {
    hasNext && setIndex(index + 1);
  };

  const handlePrev = () => {
    hasPrev && setIndex(index - 1);
  };

  const handleMoreClick = () => {
    setShowMore(true);
  };

  let hasPrev = index > 0;
  let hasNext = index < sculptureList.length - 1;

  let sculpture = sculptureList[index];
  return (
    <div className="container">
      <h2>
        {sculpture.name} by {sculpture.artist}
      </h2>
      <div className="buttons">
        <button onClick={handlePrev} className="btn btn-secondary">
          Prev
        </button>
        <button onClick={handleNext} className="btn btn-primary">
          Next
        </button>
      </div>
      <img src={sculpture.url} alt={sculpture.alt} />
      <button onClick={handleMoreClick} className="btn btn-detail">
        Show Details
      </button>
      <p>{showMore && sculpture.description}</p>
    </div>
  );
}

export default App;
