const datosUsuarios = {
    "123": { usuario: "Carlos", inversion: "$5000", ganancias: "$1500", retiro: "$1000" },
    "456": { usuario: "Ana", inversion: "$8000", ganancias: "$2500", retiro: "$2000" },
    "789": { usuario: "Luis", inversion: "$12000", ganancias: "$4000", retiro: "$3500" }
};

function mostrarDatos() {
    let userId = document.getElementById("userIdInput").value;

    if (datosUsuarios[userId]) {
        document.getElementById("nombre").innerText = datosUsuarios[userId].usuario;
        document.getElementById("inversion").innerText = datosUsuarios[userId].inversion;
        document.getElementById("ganancias").innerText = datosUsuarios[userId].ganancias;
        document.getElementById("retiro").innerText = datosUsuarios[userId].retiro;
        document.getElementById("resultado").style.display = "block";
    } else {
        document.getElementById("resultado").style.display = "none";
        alert("ID no encontrado. Inténtalo de nuevo.");
    }
}
