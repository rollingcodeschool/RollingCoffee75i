const APIPRoductos = import.meta.env.VITE_API_PRODUCTO;
console.log(APIPRoductos);

//GET
export const leerProductos = async () => {
  try {
    const respuesta = await fetch(APIPRoductos);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

//POST
//PUT o PATCH
//DELETE
