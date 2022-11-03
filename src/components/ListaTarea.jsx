import React from "react";

import ListGroup from "react-bootstrap/ListGroup";

import ItemTarea from "./ItemTarea";

const ListaTarea = (props) => {
  
  return (
    <ListGroup>
      {props.tareas.map((tarea, _id) => (
        <ItemTarea
          key={_id}
          nombreTarea={tarea.nombreTarea}
          id={tarea}
          setTareas={props.setTareas}
        />
      ))}
    </ListGroup>
  );
};

export default ListaTarea;
