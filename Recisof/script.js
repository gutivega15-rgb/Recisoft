

    <script>

        function buscarPunto() {
            // Pedimos al usuario que ingrese su localidad o zona
            let localidad = prompt("¿En qué localidad o zona de Bogotá te encuentras?");

            if (!localidad) {
                return; // Si el usuario cancela, no hace nada
            }

            localidad = localidad.toLowerCase().trim();

            let mensaje = "";


            if (localidad.includes("rafael uribe") || localidad.includes("rafael")) {
                mensaje = "📍 <strong>Punto Recisof - Rafael Uribe Uribe:</strong> Calle 48 Sur # 13-20 (Ecopunto local).";
            } else if (localidad.includes("kennedy")) {
                mensaje = "📍 <strong>Punto Recisof - Kennedy:</strong> Carrera 78 # 35-40 Sur (Punto de aprovechamiento ambiental).";
            } else if (localidad.includes("suba")) {
                mensaje = "📍 <strong>Punto Recisof - Suba:</strong> Calle 145 # 90-12 (Estación de reciclaje Ecológica).";
            } else if (localidad.includes("usaquén") || localidad.includes("usaquen")) {
                mensaje = "📍 <strong>Punto Recisof - Usaquén:</strong> Carrera 7 # 120-45 (Centro de acopio verde).";
            } else {
                mensaje = `🔍 No encontramos un punto exacto para "${localidad}", pero puedes llevar tus residuos al Ecopunto zonal más cercano habilitado en Bogotá.`;
            }

            // Mostramos el resultado en ambas secciones si existen
            let resInicio = document.getElementById("resultado");
            let resPunto = document.getElementById("resultadoPunto");

            if (resInicio) {
                resInicio.innerHTML = mensaje;
            }

            if (resPunto) {
                resPunto.innerHTML = mensaje;
            }
        }

    </script>