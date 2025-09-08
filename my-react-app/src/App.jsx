import './App.css'
import tacho from './assets/tacho.png';

function App() {

  return (
    
    <div className="centrado-pagina">
      <h1>Lista de Tareas de Perla</h1>
      <div>

        <h2 style={{ textAlign: 'center' }}>Mis tareas</h2>
        <form className="formulario-tarea">
          <input type="text" placeholder="Nueva tarea" />
          <button>ADD</button>
        </form>

        <div className="recuadro">
          <input type="checkbox" className="checkbox-tarea" />
          <span style={{ flex: 1, marginLeft: '8px' }}>Tarea 1</span>
          <img src={tacho} alt="Eliminar" className="icono-tacho" />
        </div>

        <div className="recuadro">
          <input type="checkbox" className="checkbox-tarea" />
          <span style={{ flex: 1, marginLeft: '8px' }}>Tarea 2</span>
          <img src={tacho} alt="Eliminar" className="icono-tacho" />
        </div>

        <div className="recuadro">
          <input type="checkbox" className="checkbox-tarea" />
          <span style={{ flex: 1, marginLeft: '8px' }}>Tarea 3</span>
          <img src={tacho} alt="Eliminar" className="icono-tacho" />
        </div>

      </div>
    </div>
  )
}

export default App
