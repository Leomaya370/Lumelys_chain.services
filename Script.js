
import { createClient } from "@supabase/supabase-js";

// Conectar con Supabase
const supabaseUrl = "https:// Leomaya370's Project.supabase.co";
const supabaseAnonKey = "TU-API-KEY";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Obtener datos del usuario y mostrarlos en la página
async function obtenerDatos(usuario) {
    try {
        let { data, error } = await supabase
            .from("inversores")
            .select("*")
            .eq("usuario", usuario);

        if (error) throw error;

        if (data.length > 0) {
            mostrarDatos(data[0]);
        } else {
            console.log("Usuario no encontrado.");
        }
    } catch (err) {
        console.error("Error obteniendo datos:", err.message);
    }
}

// Mostrar los datos en la página
function mostrarDatos(usuario) {
    document.getElementById("nombre").textContent = usuario.usuario;
    document.getElementById("cantidad").textContent = `$${usuario.cantidad_invertida}`;
    document.getElementById("ganancias").textContent = `$${usuario.ganancias_disponibles}`;
}

// Ejecutar la función al cargar la página
document.addEventListener("DOMContentLoaded", function () {
    obtenerDatos("nombreDelUsuario"); // Reemplázalo con datos dinámicos si los tienes
});
