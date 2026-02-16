

const estudiante = {
    matricula: 'A01198976',
    nombre: 'Diego',
    edad: 20,
    direccion: {
        ciudad: 'Monterrey',
        cp: 64000
    }
};

console.table(estudiante);
console.log(estudiante);

const estudiante2 = {...estudiante};
estudiante2.nombre = 'Abel';
console.log(estudiante2)