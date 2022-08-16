import './App.css';
import {ListaDeTareas} from "./components/ListaDeTareas.js"

function App() {
  return (
    <>
      <div className='aplicacion-tareas'>
        <div className='logo-contenedor'>
          <h2 className='todolist-logo'>ToDoList</h2>
        </div>
        <div className='tareas-lista-principal'>
          <h1>Mis Tareas</h1>
          <ListaDeTareas />
        </div>
      </div>
    </>
  );
}

export default App;
