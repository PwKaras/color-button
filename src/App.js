import './App.css';
import { useState } from 'react';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const [disabled, setDisabled] = useState(false);
  const newButtonColor = buttonColor === "red" ? 'blue' : 'red';
  const onClickButton = () => (setButtonColor(newButtonColor));
  const onChangeCheckbox = (event) => setDisabled(event.target.checked)

  return (
    <div>
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={onClickButton}
        disabled={disabled}
      >
        Change to {newButtonColor}
      </button>
      <input 
      type="checkbox" 
      id="enable-button-checkbox"
      defaultChecked={disabled}
      aria-checked={disabled}
      onChange={onChangeCheckbox}
      />
    </div>
  );
}

export default App;
