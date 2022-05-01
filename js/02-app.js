const btnLoadJson = document.querySelector('#cargarJSON')

btnLoadJson.addEventListener('click', obtenerDatos)

function obtenerDatos(){
    const url = 'data/empleado.json'
    fetch(url)
        .then(request =>{
            console.log(request.status)
            return request.json()
        })
        .then(datos => {
            mostrarHTML(datos)
        })
        .catch(error => {
            console.log(error)
        })
}

function mostrarHTML({empresa, id, nombre, trabajo}){
    const contenido = document.querySelector('#contenido')
    contenido.innerHTML = `
        <p>Empleado: ${nombre}</p>
        <p>id: ${id}</p>
        <p>empresa: ${empresa}</p>
        <p>trabajo: ${trabajo}</p>
    `
}