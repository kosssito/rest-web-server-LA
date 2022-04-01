const API_URL = 'http://localhost:3000/api/ingredientes/';

fetch(API_URL)
.then(response => response.json())
.then(data => {
  
    let element = document.getElementById('app')
    const data1 = data.map(user => {
     return `<li>${user.nombre}</li>
     <li>${user.descripcion}</li>`
    });
    element.innerHTML = `${data1}`

})
.catch(err=>console.log(err))