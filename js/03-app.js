const btnLoadJsonArr = document.querySelector('#cargarJSONArray')

btnLoadJsonArr.addEventListener('click', obtenerDatos)

function obtenerDatos(){
    const url = 'data/empleados.json'
    fetch(url)
        .then(request =>{
            console.log(request.status)
            return request.json()
        })
        .then(datos => {
            for(dato of datos){
                mostrarHTML2(dato)
            }
        })
        .catch(error => {
            console.log(error)
        })
}

function mostrarHTML2({empresa, id, nombre, trabajo}){
    const contenido = document.querySelector('#contenido')
    contenido.insertAdjacentHTML ( 'beforebegin' , `
        <p>Empleado: ${nombre}</p>
        <p>id: ${id}</p>
        <p>empresa: ${empresa}</p>
        <p>trabajo: ${trabajo}</p>
    `)
}