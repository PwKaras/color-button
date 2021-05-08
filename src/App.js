import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const newButtonColor = buttonColor === "red" ? 'blue' : 'red';
  const onClick = () => (setButtonColor(newButtonColor));

  return (
    <div>
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={onClick}
      >
        Change to {newButtonColor}
      </button>
    </div>
  );
}

export default App;
