const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
}
const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', { descripcion })
    .command('actualizar', 'Actualiza el estado completo de una tarea', { descripcion, completado })
    .command('borrar', 'Borra un elemento de la lista de tareas', descripcion)
    .help()
    .argv

module.exports = {
    argv
}