document.addEventListener("DOMContentLoaded", function() {
    console.log("App cargada correctamente.");
});
// Importar Supabase
const { createClient } = supabase

// Conectar con Supabase
const supabaseUrl = "https://TU-PROYECTO.supabase.co"
const supabaseAnonKey = "TU-API-KEY"

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Función para obtener datos del usuario
async function obtenerDatos(usuario) {
    let { data, error } = await supabase
        .from("inversores")
        .select("*")
        .eq("usuario", usuario);

    if (error) {
        console.error("Error obteniendo datos:", error);
    } else {
        console.log("Datos del usuario:", data);
        mostrarDatos(data[0]);
    }
}

// Función para mostrar los datos en la página
function mostrarDatos(usuario) {
    document.getElementById("nombre").innerText = usuario.usuario;
    document.getElementById("cantidad").innerText = `$${usuario.cantidad_invertida}`;
    document.getElementById("ganancias").innerText = `$${usuario.ganancias_disponibles}`;
}
