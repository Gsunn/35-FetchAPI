const btnLoadTXT = document.querySelector('#cargarTxt')

btnLoadTXT.addEventListener('click', obtenerDatos)

function obtenerDatos(){
    const url = 'data/datos.txt'
    fetch(url)
        .then(request =>{
            console.log(request.status)
            return request.text()
        })
        .then(datos => {
            console.log(datos)
        })
        .catch(error => {
            console.log(error)
        })
}