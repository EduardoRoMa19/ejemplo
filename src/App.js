import React, { useState, useEffect } from 'react';

function App() {
  // Definir un estado para manejar el texto introducido
  const [texto, setTexto] = useState('');
  
  // Definir un estado para manejar el texto mostrado
  const [textoMostrado, setTextoMostrado] = useState('Texto');
  
  // Definir useEffect solo como ejemplo, aunque no sea necesario aquí.
  useEffect(() => {
    console.log('El componente ha sido actualizado.');
  }, [textoMostrado]); // Solo se ejecuta cuando 'textoMostrado' cambia.

  // Función para manejar el cambio de texto
  const cambiarTexto = () => {
    setTextoMostrado(texto);  // Cambia el estado del texto mostrado
  };

  // Estado para el checkbox
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Ejemplo de Cambiar Texto con useState</h1>
      
      {/* Textbox donde el usuario ingresa texto */}
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Escribe algo aquí"
      />
      
      {/* Botón para cambiar el texto */}
      <button onClick={cambiarTexto} style={{ marginLeft: '10px' }}>
        Cambiar Texto
      </button>
      
      {/* Párrafo donde el texto será cambiado */}
      <p>{textoMostrado}</p>

      <h1>Checkbox en React</h1>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        {isChecked ? ' Seleccionado' : ' No seleccionado'}
      </label>
    </div>
  );
}

export default App;
