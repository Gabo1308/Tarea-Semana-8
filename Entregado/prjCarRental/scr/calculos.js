document.addEventListener("DOMContentLoaded", () => {
    cargarUltimaCotizacion();

    document.querySelectorAll(".botones")[0].addEventListener("click", calcular);
    document.querySelectorAll(".botones")[1].addEventListener("click", guardar);
});

function calcularDias() {
    const inicio = new Date(document.getElementsByName("fechaRetiro")[0].value);
    const fin = new Date(document.getElementsByName("fechadevolucion")[0].value);

    return (fin - inicio) / (1000 * 60 * 60 * 24);
}

async function calcular() {

    const dias = calcularDias();

    if (dias < 3 || dias > 365) {
        alert("Los días deben estar entre 3 y 365");
        return;
    }

    document.getElementsByName("dias")[0].value = dias;

    const tipoVehiculo = parseFloat(document.getElementById("tipoVehiculo").value);
    const seguro = parseFloat(document.getElementById("seguro").value);
    const pais = document.getElementById("nacionalidad").value;

    let TD = tipoVehiculo + seguro;

    let descDias = 0;
    if (dias > 30 && dias < 120) descDias = 0.15;
    if (dias >= 120) descDias = 0.25;

    TD = TD - (TD * descDias);

    document.getElementsByName("td")[0].value = TD.toFixed(2);

    const region = await obtenerRegion(pais);

    let descRegion = 0;
    if (region === "Americas" || region === "Europe") descRegion = 0.10;
    if (region === "Africa") descRegion = 0.05;

    const total = TD * dias;
    const totalFinal = total - (total * descRegion);

    document.getElementsByName("totalPagar")[0].value = totalFinal.toFixed(2);
}

function guardar() {
    const datos = {
        fechaRetiro: document.getElementsByName("fechaRetiro")[0].value,
        fechadevolucion: document.getElementsByName("fechadevolucion")[0].value,
        tipoVehiculo: document.getElementById("tipoVehiculo").value,
        seguro: document.getElementById("seguro").value,
        pais: document.getElementById("nacionalidad").value,
        dias: document.getElementsByName("dias")[0].value,
        td: document.getElementsByName("td")[0].value,
        total: document.getElementsByName("totalPagar")[0].value
    };

    localStorage.setItem("cotizacion", JSON.stringify(datos));
    localStorage.setItem("pais", datos.pais);
}

function cargarUltimaCotizacion() {
    const datos = JSON.parse(localStorage.getItem("cotizacion"));

    if (!datos) return;

    document.getElementsByName("fechaRetiro")[0].value = datos.fechaRetiro;
    document.getElementsByName("fechadevolucion")[0].value = datos.fechadevolucion;
    document.getElementById("tipoVehiculo").value = datos.tipoVehiculo;
    document.getElementById("seguro").value = datos.seguro;
    document.getElementById("nacionalidad").value = datos.pais;
    document.getElementsByName("dias")[0].value = datos.dias;
    document.getElementsByName("td")[0].value = datos.td;
    document.getElementsByName("totalPagar")[0].value = datos.total;
}

function MensajeTipoSeguro() {
    const valor = document.getElementById("seguro").value;

    let mensaje = "";

    if (valor == 5.45) mensaje = "PBO: Cubre daños al vehículo rentado y daños a vehículos terceros involucrados en un accidente de tránsito.";
    if (valor == 9.50) mensaje = "PED: Cubre la Protección Básica Obligatoria (PBO) más daños a propiedades de terceros, incendio e inundaciones";
    if (valor == 11.25) mensaje = "PGM: Cubre la Protección Extendida de Daños(PED) más gastos médicos para los ocupantes del vehículo.";

    alert(mensaje);
}