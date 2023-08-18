// abrir http (metodo,url)

//CRUD   - Métodos HTTP
//Create - POST
//Read   - GET
//Update - PUT/PATH
//Delete - DELETE


//fetch API
const listaClientes = () => 
  fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());


export const clientServices = {
  listaClientes,
};