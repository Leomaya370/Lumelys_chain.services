
const supabaseUrl = "https://ccelrkpkzngfxdtfxugf.supabase.co";
const supabaseAnonKey = "TU_API_KEY_AQUI";
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
