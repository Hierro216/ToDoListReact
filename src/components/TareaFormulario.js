import React from 'react'
import "../styles/TareaFormulario.css"

export const TareaFormulario = ({agregarTarea}) => {
  
    return (
    <>
      <form 
        className='tarea-formulario'
        onSubmit={e => agregarTarea(e)}>
        <input 
          className='tarea-input'
          type='text'
          placeholder='Escribe una Tarea'
          name='texto'
        />
      
        <input 
          type="submit"
          className='tarea-boton'
          value="Agregar Tarea"
        />
      </form>
    </>
  )
}
