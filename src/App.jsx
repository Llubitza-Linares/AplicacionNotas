import { useEffect, useState } from 'react'
import './App.css'
import Header from './componentes/Header'
import Modal from './componentes/Modal'
import IconoNuevoGasto from "./assets/nuevo-gasto.svg";
import ListadoNota from './componentes/ListadoNota'

function App() {

  const [nota, setNota] = useState("")
  const [click, setClick] = useState(false)
  const [newNota, setNewNota]= useState(false)
  const [notaAct, setNotaAct] = useState((localStorage.getItem("notas"))?JSON.parse(localStorage.getItem("notas")): []);
  const [notaEditar, setNotaEditar] = useState({})
  const  [filtro, setFiltro] = useState("");
  const [notasFiltradas, setNotasFiltradas] = useState([])

  useEffect(() => {
    console.log("Se cambio las notas", notaAct);
    localStorage.setItem("notas", JSON.stringify(notaAct));
  }, [notaAct]);

 const eliminarNota = (id) => {
  const notasActualizadas = notaAct.filter((nota) =>nota.id !== id)
  setNotaAct(notasActualizadas)
  
};

const editarNota = (nota) => {
  console.log("holis")
  console.table(nota);

  setNotaEditar(nota);
  eliminarNota(nota.id)
  setNewNota(true);

};

  return (
   <>
   <Header/>
   <div className=" bg-slate-400 ">
      
        <>
          <ListadoNota
            notas={notaAct}
            setNotaEditar={editarNota}
            eliminarNota={eliminarNota}
            filtro={filtro}
            notasFiltradas={notasFiltradas}
          />
          <div className="fixed bottom-5 right-5">
            <img
              className="w-10 hover:cursor-pointer"
              src={IconoNuevoGasto}
              alt="icono nuevo gasto"
              onClick={() => {
                setNewNota(true);
                setNotaEditar({});
              }}
            />
          </div>
        </>
        
       {newNota && ( 
       <Modal
            nota={nota}
            setNota={setNota}
            setNewNota={setNewNota}
            notaAct={notaAct}
            setNotaAct={setNotaAct}
            notaEditar={notaEditar}
            setClick={setClick}/>
       )}
         </div>
        </>
  )
}

export default App
