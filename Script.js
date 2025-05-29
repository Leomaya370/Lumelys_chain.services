
const supabaseUrl = "https://ccelrkpkzngfxdtfxugf.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNjZWxya3Brem5nZnhkdGZ4dWdmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1MTU3NjgsImV4cCI6MjA2NDA5MTc2OH0.EevDNt7gNYhcPe3dM_DvMgtVgTnjA-NdhLeMzYT6y30";
const supabase = supabase.createClient(supabaseUrl, supabaseAnonKey);

async function obtenerDatos() {
    let { data, error } = await supabase.from("inversores").select("*");

    if (error) {
        console.error("Error obteniendo datos:", error);
        return;
    }

    console.log("Datos obtenidos:", data); // Verifica en la consola

    // Mostrar datos en la página (ajusta según tus elementos HTML)
    document.getElementById("resultado").innerHTML = JSON.stringify(data, null, 2);
}

document.addEventListener("DOMContentLoaded", obtenerDatos);
async function obtenerDatos() {
    let { data, error } = await supabase.from("inversores").select("*");

    if (error) {
        alert("Error obteniendo datos: " + JSON.stringify(error));
        return;
    }

    alert("Datos obtenidos: " + JSON.stringify(data)); // Muestra los datos en una alerta
}
