import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import ItemTarea from "./ItemTarea";

const ListaTarea = ({arregloTarea}) => {
   
  return (
    <ListGroup>
        {
            arregloTarea.map((tarea, posicion)=><ItemTarea nombreTares= {tarea} key={posicion}/>)
        }
      
    </ListGroup>
  );
};

export default ListaTarea;
