import { useState } from "react";
import {generarId} from '../helpers/numbers';


const FormNotas = ({
  setNotaAct,
  notaAct,
  setNewNota,
  setClick, 
  notaEditar
}) => {

  const [nombre, setNombre]=useState("")
  const [notaEscrita, setNotaEscrita]=useState("")
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("holaa")
    const nota =[
      {
        nombre,
        notaEscrita,
        fecha: new Date(),
        id: generarId()
      }
    ]
 //   notaEditar(false)
    setNotaAct([...notaAct, ...nota])
    setNewNota(false);
  
  }
    return (
        <div className="bg-white shadow-lg rounded-md py-5 w-1/2 md:w-1/3 mx-auto mt-20">
          <h2 className="text-stone-500 text-3xl text-center font-bold my-5">
            Agregar Nota
          </h2>
          <form onSubmit={handleSubmit} className="px-5">
            <div className="campo">
              <label className="label-form" htmlFor="nombre">
                Nombre Nota
              </label>
              <input
                id="nombre"
                type="text"
                placeholder="Añade el Nombre de la Nota"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
    
            <div className="campo">
              <label className="label-form" htmlFor="nombre">
                Agregar Nota
              </label>
              <input
                id="nota"
                type="text"
                placeholder="Añade la nota"
                value={notaEscrita}
                onChange={(e) => setNotaEscrita(e.target.value)}
              />
            </div>
    
            <input
              className="bg-amber-600 hover:bg-amber-800 text-white font-bold py-2 px-4 rounded w-full"
              type="submit"
              value={"Añadir Nota"}
              onClick={() => setClick(true)}
            />
          </form>
        </div>
      );
}

export default FormNotas