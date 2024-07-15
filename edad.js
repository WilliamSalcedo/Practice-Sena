function main() {
    // Arreglo para almacenar las edades
    let edades = [];

    // Función para validar la entrada de edad
    function validarEdad(edad) {
        return edad >= 1 && edad <= 120;
    }

    // Función para ingresar las edades
    function ingresarEdades() {
        for (let i = 0; i < 10; i++) {
            let edad;
            do {
                edad = parseInt(prompt(`Ingrese la edad de la persona ${i + 1}:`));
                if (!validarEdad(edad)) {
                    alert("Error: La edad debe estar entre 1 y 120 años.");
                }
            } while (!validarEdad(edad));

            edades.push(edad);
        }
    }

    // Función para contar personas por grupo de edad y calcular estadísticas
    function calcularEstadisticas() {
        let menoresDeEdad = 0;
        let mayoresDeEdad = 0;
        let adultosMayores = 0;
        let edadMinima = edades[0];
        let edadMaxima = edades[0];
        let sumaEdades = 0;

        for (let edad of edades) {
            sumaEdades += edad;

            if (edad < 18) {
                menoresDeEdad++;
            } else if (edad >= 18 && edad < 60) {
                mayoresDeEdad++;
            } else if (edad >= 60) {
                adultosMayores++;
            }

            if (edad < edadMinima) {
                edadMinima = edad;
            }

            if (edad > edadMaxima) {
                edadMaxima = edad;
            }
        }

        let promedioEdades = sumaEdades / edades.length;

        // Mostrar resultados
        console.log("\nResultados:");
        console.log(`Personas menores de edad: ${menoresDeEdad}`);
        console.log(`Personas mayores de edad: ${mayoresDeEdad}`);
        console.log(`Adultos mayores (edad >= 60): ${adultosMayores}`);
        console.log(`Edad mínima: ${edadMinima}`);
        console.log(`Edad máxima: ${edadMaxima}`);
        console.log(`Promedio de edades: ${promedioEdades.toFixed(2)}`);
    }

    // Ejecutar el programa
    ingresarEdades();
    calcularEstadisticas();
}

// Llamar a la función principal al cargar la página
main();
