import React, { useEffect } from "react";
import { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { consultarApi } from "../helpers/queris";
import ItemTarea from "./ItemTarea";

const ListaTarea = (props) => {
  
  const [tareas, setTareas] = useState([]);
  // console.log(tareas)
   useEffect(() => {
     
     consultarApi().then((respuesta) => {
       console.log(respuesta)
       setTareas(respuesta);
     });
   }, []);
  return (
    <ListGroup>
      {tareas.map((tarea, _id) => (
        <ItemTarea  key={_id} nombreTarea={tarea.nombreTarea} id={tarea} setTareas={setTareas}/>
      ))}
    </ListGroup>
  );
};

export default ListaTarea;
