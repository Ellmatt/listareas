import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import ItemTarea from "./ItemTarea";

const ListaTarea = ({arregloTarea, borrarTarea}) => {
   
  return (
    <ListGroup>
        {
            arregloTarea.map((tarea, posicion)=><ItemTarea nombreTarea={tarea} borrarTarea={borrarTarea} key={posicion}/>)
        }
      
    </ListGroup>
  );
};

export default ListaTarea;
