import CerrarBtn from "../assets/cerrar.svg";
import FormNotas from "./FormNotas";

const Modal = ({setNewNota, notaAct, setNotaAct, notaEditar, setClick}) => {
  const ocultarModal = () => {
    console.log("ocultar modal");
    setNewNota(false);
  };
  
    return (
        <div className="fixed inset-0 w-full h-full bg-custom-black">
          <div className="absolute right-3 top-3 w-5 h-5">
             <img src={CerrarBtn} alt="cerrar modal" onClick={ocultarModal}/> 
          </div>
          <FormNotas notaAct={notaAct} setNotaAct={setNotaAct} setNewNota={setNewNota} notaEditar={notaEditar} setClick={setClick}/>
        </div>
      );
}

export default Modal
