const btncargarAPI = document.querySelector('#cargarAPI')

btncargarAPI.addEventListener('click', obtenerDatos)

function obtenerDatos() {
    const url = 'https://picsum.photos/list'

    fetch(url)
        .then(request => request.json())
        .then(datos => mostrarHTML3(datos))
}

function mostrarHTML3(datos){
    for(let dato of datos){
        const contenido = document.querySelector('#contenido')
        contenido.insertAdjacentHTML ( 'beforebegin' , 
            `<p>${dato.author} ${dato.filename}</p>`
        )
    }
}