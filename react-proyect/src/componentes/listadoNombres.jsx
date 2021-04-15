import React, { useState } from 'react'
import uniqid from 'uniqid'



const Lista =()=>{
    const [tarea,setTarea] = useState('')
    const [lista,setLista] = useState([])
    const [error,setError] = useState(null)

    const addTarea = (e) => {
        e.preventDefault()
        if (!tarea.trim()) {
            setError('El campo nombre esta vacio')
            return
        }
        const nuevaTarea = {
            id:uniqid(),
            nombreTarea:tarea
        }
        setLista([...lista,nuevaTarea])
        setTarea('') 
        setError(null)   
    }

    const borrarTarea = (id) => {
        const nuevaArray = lista.filter (item => item.id != id)
        setLista(nuevaArray)
    }
    
   
    return(
        <div>
            <div className="row">
                <div className="col">
                    <h2 className="text-center">Nueva tarea</h2>
                    <form onSubmit={(e)=>addTarea(e)} className="form-group text-center">
                        <input 
                            onChange={(e)=>{setTarea(e.target.value)}} 
                            className="form-control mb-3 mt-3" 
                            type="text" 
                            placeholder="Crear nueva tarea"
                            value={tarea}
                        />
                        <input  
                            className="btn btn-info btn-block" 
                            type="submit"
                        />
                    </form>
                    {
                        error != null? (
                            <div class="alert alert-danger" role="alert"><i class="fas fa-exclamation-triangle mr-2"></i><b>{error}</b></div>
                        ):(
                            <div></div>
                        )
                    }
                </div>
                
                <div className="col">
                    <h2 className="text-center">Listado de tareas</h2>
                        <ul className="list-group">
                            {
                                lista.map(
                                    item => <li key={item.id} className="list-group-item">{item.nombreTarea}
                                    <button onClick={ () => {borrarTarea(item.id)}} className="btn btn-outline-danger float-right">Borrar</button>
                                    <button class="btn btn-outline-success float-right mr-2" >  ✓  </button>
                                    </li>
                                         )
                                        }
                        </ul>
                </div>
            </div>
        </div>
)

}


export default Lista