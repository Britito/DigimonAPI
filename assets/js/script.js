const API_URL = "https://digimon-api.vercel.app/api/digimon"

function traerDigimon () {
    let nombre = document.getElementById("search").value;
    console.log(nombre)
    
    fetch(`${API_URL}/name/${nombre}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        let imagenDigimon = data[0].img
        console.log(imagenDigimon)
        let nombreDigimon = data[0].name
        console.log(nombreDigimon)
        let nivelDigimon = data[0].level
        console.log(nivelDigimon)

        let verTarjeta = `
            <div class="card shadow card text-black bg-info mb-3" id="card2" style="width: 22rem;">
                <div class= "inner">
                    <img src="${imagenDigimon}" class="card-img-top" alt="Imagen de un Digimon ">
                </div>
                <div class="card-body text-center">
                    <h5 class="card-title">Nombre: ${nombreDigimon}</h5>
                    <p class="card-text">Nivel: ${nivelDigimon}</p>
                </div>
            </div>                 
        `
    document.getElementById("card").innerHTML = verTarjeta

    })

    .catch(error => alert("El nombre que has ingresado no existe"))

}
    document.getElementById("submit").addEventListener("click", traerDigimon)

function verImg(nombreDigimon, imagenDigimon) {
    document.getElementById("tituloModal").innerText = nombreDigimon
    document.getElementById("imagenModal").setAttribute("src", imagenDigimon)
    const myModal = new bootstrap.Modal("#modalImg");
    myModal.show();
    }



function tablaDigimon(){
    fetch(API_URL)
    .then ((response)=> response.json())
    .then((data) => {
        console.log(data)
        let obtenerDatos = "";
        data.forEach((digimon) => {
            obtenerDatos +=
        `<tr>
            <td>${digimon.name}</td>
            <td>${digimon.level}</td>
            <td><button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick= "verImg('${digimon.name}','${digimon.img}')">Imagen</button></td>
        </tr>`;
        });
        
        document.getElementById("tbody").innerHTML = obtenerDatos
        

    })
    .catch(error => alert("El nombre que has ingresado no existe"))
    

}

tablaDigimon()

