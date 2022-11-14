// Variables

const marca = document.querySelector("#marca");
const year = document.querySelector("#year");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");

// Contenedor para los resultados
const resultado = document.querySelector("#resultado");


const max = new Date().getFullYear();
const min = max - 10;

// Generar un objeto con la búsqueda
const datosBusqueda = {
    marca: "",
    year: "",
    minimo: "",
    maximo: "",
    puertas: "",
    transmision: "",
    color: ""
}





// Eventos
document.addEventListener("DOMContentLoaded", () => {
    mostrarAutos(autos); // Muestra los autos a cargar

    // Llena las opciones de años
    llenarSelect();
});

marca.addEventListener("change", (e) => {
    datosBusqueda.marca = e.target.value;

    filtrarAuto();
});

year.addEventListener("change", (e) => {
    datosBusqueda.year = e.target.value;
    filtrarAuto();
});

minimo.addEventListener("change", (e) => {
    datosBusqueda.minimo = e.target.value;
    filtrarAuto();
});

maximo.addEventListener("change", (e) => {
    datosBusqueda.maximo = e.target.value;
    filtrarAuto();
});

puertas.addEventListener("change", (e) => {
    datosBusqueda.puertas = e.target.value;
    filtrarAuto();
});

transmision.addEventListener("change", (e) => {
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
});

color.addEventListener("change", (e) => {
    datosBusqueda.color = e.target.value;
    filtrarAuto();
});







// Funciones

function mostrarAutos(autos) {

    limpiarHTML(); // Elimina el HTML previo

    autos.forEach( auto => {
        const { marca, modelo, year, puertas, transmision, precio, color } = auto; // Destructuring
        const autoHTML = document.createElement("p");

        autoHTML.textContent = `
        ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: ${precio} - Color: ${color}`

        // Insertar en el HTML
        resultado.appendChild(autoHTML);
    })
}

// Limpiar HTML
function limpiarHTML() {
    while( resultado.firstChild ) {
        resultado.removeChild(resultado.firstChild);
    }
}

// General los años del select
function llenarSelect() {

    for( let i = max; i >= min; i--) {
        const opcion = document.createElement("option");
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); // Agrega las opciones de año al select
    }
}

// Funcion que filtra en base a la búsqueda
function filtrarAuto() {
    const resultado = autos.filter( filtrarMarca ).filter( filtrarYear ).filter( filtrarMinimo ).filter( filtrarMaximo ).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);
    //console.log(resultado);

    mostrarAutos(resultado);

    if( resultado.length ) {
        mostrarAutos(resultado);
    } else {
        noResultado();
    }
}

function noResultado() {

    limpiarHTML();

    const noResultado = document.createElement("div");
    noResultado.classList.add("alerta", "error");
    noResultado.textContent = "No Hay Resultados";
    resultado.appendChild(noResultado);
}



function filtrarMarca(auto) {
    if( datosBusqueda.marca ) {
        return auto.marca === datosBusqueda.marca;
    } else {
        return auto;
    }
}

function filtrarYear(auto) {
    if( datosBusqueda.year ) {
        return auto.year === parseInt(datosBusqueda.year);
    } else {
        return auto;
    }
}

function filtrarMinimo (auto) {
    if( datosBusqueda.minimo ) {
        return auto.precio >= datosBusqueda.minimo;
    } else {
        return auto;
    }
}

function filtrarMaximo(auto) {
    if( datosBusqueda.maximo ) {
        return auto.precio <= datosBusqueda.maximo;
    } else {
        return auto;
    }
}

function filtrarPuertas(auto) {
    if( datosBusqueda.puertas ) {
        return auto.puertas === parseInt(datosBusqueda.puertas);
    } else {
        return auto;
    }
}

function filtrarTransmision(auto) {
    if( datosBusqueda.transmision ) {
        return auto.transmision === datosBusqueda.transmision;
    } else {
        return auto;
    }
}

function filtrarColor(auto) {
    if( datosBusqueda.color ) {
        return auto.color === datosBusqueda.color;
    } else {
        return auto;
    }
}