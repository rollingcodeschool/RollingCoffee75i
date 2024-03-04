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
export const crearProducto = async (productoNuevo) => {
  try {
    const respuesta = await fetch(APIPRoductos, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productoNuevo),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

//PUT o PATCH
export const editarProducto = async (productoEditado, id) => {
  try {
    const respuesta = await fetch(APIPRoductos + "/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productoEditado),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

//DELETE

export const borrarProducto = async (id) => {
  try {
    const respuesta = await fetch(APIPRoductos + "/" + id, {
      method: "DELETE",
    });
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

//GET de un unico producto
export const obtenerProducto = async (id) => {
  try {
    const respuesta = await fetch(APIPRoductos + "/" + id);
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

//cuando tengamos el backend con un login enviar solicitud POST
const userAdmin = {
  email: "admin@rollingcoffee.com",
  password: "123Aa$123",
};

export const login = (usuario) => {
  if (
    usuario.email === userAdmin.email &&
    usuario.password === userAdmin.password
  ) {
    sessionStorage.setItem("loginRollingCoffee", JSON.stringify(usuario.email));
    return true;
  } else {
    return false;
  }
};
