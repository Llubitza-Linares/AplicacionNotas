import Notas from "./Notas";

const ListadoNota = ({
    notas,
    setNotaEditar,
    eliminarNota,
    filtro,
    notasFiltradas

}) => {
   return (
    <div className="listado-notas contenedor">
      {filtro ? (
        <>
          <h2>
            {notasFiltradas.length
              ? "Notas"
              : "No Hay Notas en esta categoría"}
          </h2>
          {notasFiltradas.map((nota) => (
            <Notas
              key={nota.id}
              nota={nota}
              setNotaEditar={setNotaEditar}
              eliminarNota={eliminarNota}
            />
          ))}
        </>
      ) : (
        <>
          <h2>{notas.length ? "Notas" : "No Hay Notas aún"}</h2>
          {notas.map((nota) => (
            <Notas
              key={nota.id}
              nota={nota}
              setNotaEditar={setNotaEditar}
              eliminarNota={eliminarNota}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default ListadoNota