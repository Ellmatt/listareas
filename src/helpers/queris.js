const URL = "http://localhost:4000/apitarea/tareas";

export const consultarApi = async () => {
  try {
    const respuesta = await fetch(URL);

    const listaProductos = await respuesta.json();

    return listaProductos;
  } catch (error) {
    console.log(error);
  }
};

export const crearProductoAPI = async (tarea) => {
  try {
    const respuesta = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tarea),
    });

    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const borrarProductoAPI = async (id) => {
  console.log(id);
  try {
    const respuesta = await fetch(URL + "/" + id, {
      method: "DELETE",
    });

    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

//   export const obtenerProductoApi = async (id) => {
//     try {
//       // fetch para peticiones
//       // await para esperar
//       const respuesta = await fetch(URL + "/" + id);
//       // .json extrae datos en la propieda de la respuesta
//       const productoBuscado = {
//         dato: await respuesta.json(),
//         status: respuesta.status,
//       };

//       // console.log(respuesta)
//       return productoBuscado;
//     } catch (error) {
//       console.log(error);
//     }
//   };
