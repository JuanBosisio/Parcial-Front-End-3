import { useState } from "react";
import Card from "./Card";

function App() {
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [showCard, setShowCard] = useState(false);

  const validName = () => {
    let array = name.split('')
    if (array[0] == " "){
      return false;
    } else if (name.length < 3){
      return false;
    } else {
      return true;
    }
  }

  const validColor = () => {
    if(color.length < 6){
      return false;
    }
    else{
      return true;
    }
  }

  const onChangeName = (e) => setName(e.target.value);
  const onChangeColor = (e) => setColor(e.target.value);

  const onSubmitForm = (e) => {
    e.preventDefault();
    let valid = validName();
    let validC = validColor();
    if ((valid == false) || (validC == false)){
      setShowCard(false);
      alert ("Por favor chequea que la informacion sea correcta.")
    } else {
      setShowCard(true);
    }
  }

  return (
    <div className="App">
      <h1>Elige un color</h1>
      <form onSubmit={onSubmitForm}>{/* aqui deberias escribir tu codigo */}
      <input
          type="text"
          placeholder="Ingresa tu nombre"
          value={name}
          onChange={onChangeName}
      />
      <input
        type="text"
        placeholder="Ingresa tu color favorito (formato HEX)"
        value={color}
        onChange={onChangeColor}
      />
        <button type="submit">Enviar</button>
      </form>
      {showCard && (
        <Card
        updateName = {name}
        updateColor = {color}
        />
        )
      }

    </div>
    
  
  );
}

export default App;
