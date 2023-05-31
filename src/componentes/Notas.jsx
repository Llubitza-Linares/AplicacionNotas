import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import { formatearFecha } from "../helpers/numbers";

const Notas = ({ nota, setNotaEditar, eliminarNota }) => {
  const { nombre, notaEscrita, id, fecha } = nota;

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setNotaEditar(nota)}>Editar </SwipeAction>
    </LeadingActions>
  );

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction onClick={() => eliminarNota(id)} destructive={true}>
        Eliminar
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="nota sombra ">
          <div className="contenido-nota">
            
            <div className="descripcion-nota">
              <p className="nombre-nota">{nombre}</p>
              <p className="cantidad-nota">{notaEscrita}</p>
              <p className="fecha-nota">
                Agregado el: {""}
                <span>{formatearFecha(fecha)}</span>
              </p>
            </div>
          </div>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default Notas;