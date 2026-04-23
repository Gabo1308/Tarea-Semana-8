document.addEventListener("DOMContentLoaded", () => {
    cargarPaises();
});

async function cargarPaises() {
    const select = document.getElementById("nacionalidad");

    try {

        //tuve que cambiar la url porque sino no funcionaba
        const res = await fetch("https://restcountries.com/v3.1/independent?status=true");
        const data = await res.json();

        data.forEach(function (pais) {
            const option = document.createElement("option");
            option.value = pais.cca3;
            option.textContent = pais.name.common;
            select.appendChild(option);
        });

        const guardado = localStorage.getItem("pais") || "CRI";
        select.value = guardado;

    } catch (error) {
        console.error("Error cargando países", error);
    }
}

async function obtenerRegion(cca3) {
    const res = await fetch(`https://restcountries.com/v3.1/alpha?codes=${cca3}`);
    const data = await res.json();
    return data[0].region;
}


