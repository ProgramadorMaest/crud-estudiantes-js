import { Estudiante } from "./estudiante.js";
export class GestorEstudiantes {
    constructor() {
        this.estudiantes = {};
    }

    crearEstudiante(nombre, edad, nivel) {
        const nuevoEstudiante = new Estudiante(nombre, edad, nivel);
        this.estudiantes[nuevoEstudiante.id] = nuevoEstudiante;
        console.log("Estudiante creado:", nuevoEstudiante);
    }

    listarEstudiantes() {
        console.log("\n Lista de Estudiantes:");
        for (let clave in this.estudiantes) {
            console.log(this.estudiantes[clave]);
        }
    }

    actualizarEstudiante(id, nuevoNombre, nuevaEdad, nuevoNivel) {
        if (this.estudiantes[id]) {
            this.estudiantes[id].nombre = nuevoNombre;
            this.estudiantes[id].edad = nuevaEdad;
            this.estudiantes[id].nivel = nuevoNivel;
            console.log("Estudiante actualizado:", this.estudiantes[id]);
        } else {
            console.log(" Estudiante no encontrado.");
        }
    }

    eliminarEstudiante(id) {
        if (this.estudiantes[id]) {
            delete this.estudiantes[id];
            console.log(` Estudiante con ID ${id} eliminado.`);
        } else {
            console.log(" Estudiante no encontrado.");
        }
    }
}
