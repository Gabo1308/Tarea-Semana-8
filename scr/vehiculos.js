const imagenes = {
    "10.45": ["Compacto1.png", "Compacto2.png", "Compacto3.png"],
    "15.50": ["Mediano1.png", "Mediano2.png", "Mediano3.png"],
    "25.25": ["TodoTerreno1.png", "TodoTerreno2.png", "TodoTerreno3.png"],
    "20.30": ["Familiar1.png", "Familiar2.png", "Familiar3.png"]
};

const descripciones = {
    "Compacto1.png": "KIA PICANTO, Año 2016",
    "Compacto2.png": "FORD FIESTA ST, Año 2015",
    "Compacto3.png": "PEUGEOT 308, Año 2018",

    "Mediano1.png": "HONDA CITY CAR, Año 2017",
    "Mediano2.png": "MERCEDES SLS, Año 2015",
    "Mediano3.png": "FORD FIESTA ST, Año 2016",

    "TodoTerreno1.png": "TOYOTA FJ CRUISER, Año 2016",
    "TodoTerreno2.png": "TOYOTA Prado, Año 2018",
    "TodoTerreno3.png": "NISSAN JUKE, Año 2017",

    "Familiar1.png": "TOYOTA SIENNA, Año 2018",
    "Familiar2.png": "DODGE GRAND CARAVANE, Año 2015",
    "Familiar3.png": "HYUNDAI ELANTRA, Año 2016"
};

function mostrarTodo() {

    const tipo = document.getElementById("tipoVehiculo").value;

    const lista = imagenes[tipo];

    document.getElementById("img1").src = "images/" + lista[0];
    document.getElementById("img2").src = "images/" + lista[1];
    document.getElementById("img3").src = "images/" + lista[2];

    document.getElementById("imgVista").src = "images/" + lista[0];

    document.getElementById("infTCar").innerText = descripciones[lista[0]];
}

function mostrarImagen(num) {

    const tipo = document.getElementById("tipoVehiculo").value;
    const lista = imagenes[tipo];

    const imgSeleccionada = lista[num - 1];

    document.getElementById("imgVista").src = "images/" + imgSeleccionada;
    document.getElementById("infTCar").innerText = descripciones[imgSeleccionada];
}