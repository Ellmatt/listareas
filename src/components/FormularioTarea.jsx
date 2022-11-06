import ListaTarea from "./ListaTarea";
import { Form, Button } from "react-bootstrap";
import { consultarApi, crearTareaAPI } from "../helpers/queris";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useState } from "react";
import { useEffect } from "react";

const FormularioTarea = () => {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    consultarApi().then((respuesta) => {
      setTareas(respuesta);
    });
  }, []);
  const {
    register,
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      nombreTarea: "",
    },
  });

  const onSubmit = (datos) => {
    crearTareaAPI(datos).then((respuesta) => {
      if (respuesta.status === 201) {
        consultarApi().then((respuesta) => {
          setTareas(respuesta);
        });
        Swal.fire(
          "Tarea creada",
          "El tarea a sido creado correctamente",
          "success"

        );
        reset();
      } else {
        Swal.fire("Ocurrio un error", "Vuelva a intentarlo más tarde", "error");
      }
    });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Ingrese una tarea"
            {...register("nombreTarea", {
              required: "Este dato es obligatorio",
              minLength: {
                value: 2,
                message: "Debe ingresar como minimo 2 caracteres",
              },
              maxLength: {
                value: 20,
                message: "Debe ingresar como maximo 20 caracteres",
              },
            })}
          />
          <Form.Text></Form.Text>
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form.Group>
      </Form>
      <ListaTarea tareas={tareas} setTareas={setTareas}></ListaTarea>
    </div>
  );
};

export default FormularioTarea;
