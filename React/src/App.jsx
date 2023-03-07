import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Saludo from './components/pure/saludo'
import SaludoF from './components/pure/saludoF'
import TaskListComponent from './components/container/task_list'
import Ejemplo1 from './hooks/Ejemplo1'
import Ejemplo2 from './hooks/Ejemplo2'
import MiComponenteConContexto from './hooks/Ejemplo3'
import Ejemplo4 from './hooks/Ejemplo4'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        {/* <Saludo name="Alexander"></Saludo> */}
        {/* <SaludoF name="Alexander"></SaludoF> */}
        
        {/* Componente  de listado de tareas */}
        {/* <TaskListComponent></TaskListComponent> */}

        {/* Ejemplo de uso de HOOKS */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        <Ejemplo4 nombre="Martin">
          {/* Todo de aqui es tratado como props.children */}
          <h3>
            Contenido de props.children
          </h3>
        </Ejemplo4>

      </div>
    </div>
  )
}

export default App
