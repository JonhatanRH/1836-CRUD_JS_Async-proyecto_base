// abrir http (metodo,url)

//CRUD   - Métodos HTTP
//Create - POST
//Read   - GET
//Update - PUT/PATH
//Delete - DELETE


//fetch API
const listaClientes = () => 
  fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());


const crearCliente = (nombre, email) => {
  return fetch("http://localhost:3000/perfil", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ nombre, email, id : uuid.v4() }),
  });
};

const elimincarCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: "DELETE",

  })
}

export const clientServices = {
  listaClientes, 
  crearCliente,
  elimincarCliente,
};