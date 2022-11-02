import ListaTarea from "./ListaTarea";
import { Form, Button } from "react-bootstrap";
import { consultarApi, crearProductoAPI } from "../helpers/queris";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

import { useNavigate } from "react-router-dom";

const FormularioTarea = () => {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      nombreTarea: "",
    },
  });
  const navegacion = useNavigate();
  const onSubmit = (datos) => {
    // los datos ya estan validados
    console.log(datos);
    // enviar lo datos a la api
    // .then es para dar todo el tiempo del mundo y lugo de tener la respuesta hacer el codigo entre ()
    // en el parametro se puede usar cualquier nombre pero para mayor presicion usar la misma palabra del return de queris
    crearProductoAPI(datos).then((respuesta) => {
      console.log(respuesta);
      if (respuesta.status === 201) {
        // el producto se creo
        Swal.fire(
          "Producto creado",
          "El producto a sido creado correctamente",
          "success"
        );
        // reset();
        // // redireccionar
        navegacion("/");
      } else {
        // mostrar error al usuario
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
      <ListaTarea respuesta={onSubmit}></ListaTarea>
    </div>
  );
};

export default FormularioTarea;
