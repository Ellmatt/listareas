import { Button, ListGroup } from "react-bootstrap";
import { borrarProductoAPI, consultarApi } from "../helpers/queris";
import Swal from "sweetalert2";


const ItemTarea = (props) => {
 
  // console.log(props)
  const borrarProducto = () => {
    Swal.fire({
      title: "Esta seguro de eliminar este producto?",
      text: "No se puede revertir este paso!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar!",
      cancelButtonText: "Cancelar!",
    }).then((result) => {
      if (result.isConfirmed) {
        // realizar la consulta a la api
        borrarProductoAPI(props.id._id).then((respuesta) => {
          if (respuesta.status === 200) {
            // actualizar el state productos o la tabla
            consultarApi().then((respuesta) => {
              props.setTareas(respuesta);
            });
            Swal.fire("Borrado!", "Su producto a sido borrado!", "success");
          } else {
            Swal.fire(
              "Se produjo un error",
              "intente realizar esta operacion en otro momento!",
              "error"
            );
          }
        });
      }
    });
  };
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      {props.nombreTarea}
      {/* siempre para agregar funcion con parametro por props se debe agregar funcion en forma de flecha */}
      <Button variant="danger" onClick={borrarProducto}>
        Borrar
      </Button>
    </ListGroup.Item>
  );
};

export default ItemTarea;
