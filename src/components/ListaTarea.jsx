import React, { useEffect } from "react";
import { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { consultarApi } from "../helpers/queris";
import ItemTarea from "./ItemTarea";

const ListaTarea = () => {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    consultarApi().then((respuesta) => {
      setTareas(respuesta);
    });
  }, []);
  return (
    <ListGroup>
      {tareas.map((tarea, _id) => (
        <ItemTarea
          key={_id}
          nombreTarea={tarea.nombreTarea}
          id={tarea}
          setTareas={setTareas}
        />
      ))}
    </ListGroup>
  );
};

export default ListaTarea;
