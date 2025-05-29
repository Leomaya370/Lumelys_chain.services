import { createClient } from "@supabase/supabase-js";

// Conectar con Supabase
const supabaseUrl = "https://ccelrkpkzngfxdtfxugf.supabase.co";
const supabaseAnonKey = "TU_API_KEY_AQUI";
const supabase = supabase.createClient(supabaseUrl, supabaseAnonKey);

// Función para obtener datos del usuario desde Supabase
async function obtenerDatos(usuario) {
    logEnPantalla(`Buscando datos del usuario: ${usuario}`);

    try {
        let { data, error } = await supabase
            .from("inversores")
            .select("*")
            .eq("usuario", usuario);

        if (error) {
            logEnPantalla("Error obteniendo datos de Supabase.");
            console.error("Error:", error);
            return;
        }

        logEnPantalla(`Datos recibidos: ${JSON.stringify(data)}`);

        if (data.length > 0) {
            mostrarDatos(data[0]);
        } else {
            logEnPantalla("No se encontraron datos para el usuario.");
        }
    } catch (err) {
        console.error("Error inesperado:", err.message);
        logEnPantalla("Error inesperado al obtener datos.");
    }
}

// Función para mostrar los datos en la página
function mostrarDatos(usuario) {
    logEnPantalla("Mostrando datos en la página...");
    console.log("Usuario recibido:", usuario);

    document.getElementById("nombre").textContent = usuario.usuario;
    document.getElementById("cantidad").textContent = `$${usuario.cantidad_invertida}`;
    document.getElementById("ganancias").textContent = `$${usuario.ganancias_disponibles}`;
}

// Función para mostrar logs en la página (para móviles)
function logEnPantalla(mensaje) {
    let logDiv = document.getElementById("log") || crearLogDiv();
    logDiv.innerHTML += `<p>${mensaje}</p>`;
}

function crearLogDiv() {
    let div = document.createElement("div");
    div.id = "log";
    div.style = "position: fixed; bottom: 0; left: 0; background: white; padding: 10px; width: 100%; max-height: 200px; overflow-y: scroll; border-top: 1px solid black;";
    document.body.appendChild(div);
    return div;
}

// Ejecutar la función al cargar la página
document.addEventListener("DOMContentLoaded", function () {
    const usuario = "nombreDelUsuario"; // Aquí puedes obtenerlo dinámicamente si lo deseas
    obtenerDatos(usuario);
});
