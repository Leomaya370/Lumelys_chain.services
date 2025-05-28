
import { createClient } from "@supabase/supabase-js";

// Conectar con Supabase
const supabaseUrl = "https:// Leomaya370's Project.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6Z215Z2doa2p5em9yYWV6eHJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU0OTE1NTEsImV4cCI6MjA2MTA2NzU1MX0.NBZ2VcsfhqFQ2kyxpHgXQDNvCGE2Fe42Fw6RyA4m9qs";
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
