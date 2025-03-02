import readlineSync from "readline-sync";
import { GestorEstudiantes } from "./gestorEstudiantes.js";

export function mostrarMenu() {
    const gestor = new GestorEstudiantes();
    
    while (true) {
        console.log("\n SISTEMA DE GESTIÓN DE ESTUDIANTES ");
        console.log("1. Crear estudiante");
        console.log("2. Listar estudiantes");
        console.log("3. Actualizar estudiante");
        console.log("4. Eliminar estudiante");
        console.log("5. Salir");

        let opcion = readlineSync.question("Seleccione una opción: ");
        
        if (opcion === "1") {
            let nombre = readlineSync.question("Nombre: ");
            let edad = readlineSync.question("Edad: ");
            let nivel = readlineSync.question("Nivel: ");
            gestor.crearEstudiante(nombre, edad, nivel);
        } else if (opcion === "2") {
            gestor.listarEstudiantes();
        } else if (opcion === "3") {
            let id = readlineSync.question("ID del estudiante: ");
            let nuevoNombre = readlineSync.question("Nuevo Nombre: ");
            let nuevaEdad = readlineSync.question("Nueva Edad: ");
            let nuevoNivel = readlineSync.question("Nuevo Nivel: ");
            gestor.actualizarEstudiante(id, nuevoNombre, nuevaEdad, nuevoNivel);
        } else if (opcion === "4") {
            let id = readlineSync.question("ID del estudiante a eliminar: ");
            gestor.eliminarEstudiante(id);
        } else if (opcion === "5") {
            console.log(" ¡Hasta luego!");
            break;
        } else {
            console.log(" Opción inválida.");
        }
    }
}
