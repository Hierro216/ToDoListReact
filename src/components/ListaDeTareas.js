/* eslint-disable no-const-assign */
import React, { useState } from 'react'
import "../styles/ListaDeTareas.css"
import { Tarea } from './Tarea'
import { TareaFormulario } from './TareaFormulario.js'
import { guardarEnStorage } from "../helpers/GuardarEnStorage.js"

export const ListaDeTareas = () => {
  
  let [tareas, setTareas] = useState([])

  const conseguirTareas = () => {
    
    //Conseguir tareas del LocalStorage
    let tareas_local = JSON.parse(localStorage.getItem("tareas"))
    
    //Actualizar el estado
    setTareas(tareas_local)

    return tareas_local
  }

  const agregarTarea = (e) => {
    
    //Evitamos que se refresque la página al enviar los datos
    e.preventDefault()  
        
    //Conseguir datos del formulario
    let target = e.target
    
    //Crear objeto de la tarea a guardar
    let tarea = {
      id: new Date().getTime(),
      texto: target.texto.value,
      completada: false
    }

    //Actualizar estado
    setTareas([...tareas, tarea])

    //Guardar en el LocalStorage
    guardarEnStorage("tareas", tarea)
  }

  const eliminarTarea = (id) => {
    
    //Conseguir tareas almacenadas
    let tareasAlmacenadas = conseguirTareas()

    //Filtrar esas tareas para que elimine del array la que quiero
    let arrayActualizado = tareasAlmacenadas.filter(tarea => tarea.id !== parseInt(id))

    //Actualizar estado del listado
    setTareas(arrayActualizado)

    //Actualizar los datos en el LocalStorage
    localStorage.setItem("tareas", JSON.stringify(arrayActualizado))

  }

  const completarTarea = (id) => {
    let tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  }
  
  return (
    <>
      <TareaFormulario agregarTarea={agregarTarea}/>
      <div className='tareas-lista-contenedor'>
        {
          tareas.length > 0 ? tareas.map(tarea =>{
            return (
              <Tarea
                key={tarea.id}
                id={tarea.id}
                texto={tarea.texto}
                completada={tarea.completada}
                completarTarea={completarTarea}
                eliminarTarea={eliminarTarea}
            />
            )
          })
          : <h2 style={{color: "black"}}>No hay tareas</h2>
        } 
      </div>
    </>
  )
}
