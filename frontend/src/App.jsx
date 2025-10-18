import React, { useState, useEffect } from 'react';

function App() {
  const [gastos, setGastos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3001/api/gastos')
      .then(response => response.json())
      .then(data => {
        setGastos(data);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>💰 Gasto Claro</h1>
      <p>Controlá tus gastos de forma inteligente</p>
      
      {loading ? (
        <p>Cargando gastos...</p>
      ) : (
        <div>
          <h2>Tus Gastos</h2>
          <ul>
            {gastos.map(gasto => (
              <li key={gasto.id}>
                <strong>{gasto.descripcion}</strong>: ${gasto.monto} 
                <span style={{color: 'gray'}}> ({gasto.categoria})</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
