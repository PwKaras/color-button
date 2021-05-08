import './App.css';
import { useState } from 'react';

export const replaceCamelWithSpaces = (colorName) => {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
};

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const [disabled, setDisabled] = useState(false);
  const newButtonColor = buttonColor === "red" ? 'blue' : 'red';
  const onClickButton = () => (setButtonColor(newButtonColor));
  const onChangeCheckbox = (event) => setDisabled(event.target.checked)

  return (
    <div>
      <button
        style={{ backgroundColor: disabled ? 'gray' : buttonColor }}
        onClick={onClickButton}
        disabled={disabled}
      >
        Change to {newButtonColor}
      </button>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={disabled}
        aria-checked={disabled}
        onChange={onChangeCheckbox}
      />
      <label htmlFor="disable-button-checkbox">
        Disable button
      </label>
    </div>
  );
}

export default App;
