const http = new XMLHttpRequest();

// abrir http (metodo,url)

//CRUD   - Métodos HTTP
//Create - POST
//Read   - GET
//Update - PUT/PATH
//Delete - DELETE

http.open("GET","http://localhost:3000/perfil");

http.send();

http.onload = () => {
    const data = http.response;
    console.log(data);
}
