import './App.css'
import tacho from './assets/tacho.png';
import { useState } from 'react';

function App() {

  const [checked, setChecked] = useState([false, false, false]);

  const handleCheck = idx => {
    setChecked(prev => prev.map((v, i) => i === idx ? !v : v));
  };

  const tareas = ["Tarea 1", "Tarea 2", "Tarea 3"];

  return (
    <div className="centrado-pagina">
      <h1>Lista de Tareas de Perla</h1>
      <div>
        <h2 style={{ textAlign: 'center' }}>Mis tareas</h2>
        <form className="formulario-tarea">
          <input type="text" placeholder="Nueva tarea" />
          <button>ADD</button>
        </form>
        {tareas.map((tarea, idx) => (
          <div className="recuadro" key={tarea}>
            <input
              type="checkbox"
              className="checkbox-tarea"
              checked={checked[idx]}
              onChange={() => handleCheck(idx)}
            />
            <span
              style={{
                flex: 1,
                marginLeft: '8px',
                textDecoration: checked[idx] ? 'line-through' : 'none',
                color: checked[idx] ? '#888' : 'inherit',
                transition: 'color 0.2s'
              }}
            >
              {tarea}
            </span>
            <img src={tacho} alt="Eliminar" className="icono-tacho" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App
