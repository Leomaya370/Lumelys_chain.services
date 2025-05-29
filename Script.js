
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

document.getElementById("consultar").addEventListener("click", async function() {
    let { data, error } = await supabase.from("inversores").select("*");

    if (error) {
        document.getElementById("resultado").innerHTML = "<p>Error obteniendo datos: " + JSON.stringify(error) + "</p>";
        return;
    }

    let contenido = "<h2>Datos de Inversores:</h2><ul>";
    data.forEach(item => {
        contenido += `<li>Usuario: ${item.usuario}, Inversión: ${item.inversion}, Ganancias: ${item.ganancias}</li>`;
    });
    contenido += "</ul>";

    document.getElementById("resultado").innerHTML = contenido;
});
document.getElementById("consultar").addEventListener("click", function() {
    alert("El botón se ha presionado.");
});
