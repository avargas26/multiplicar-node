//requireds
//file systema es un paquete propio de nodejs
//const fs = require('fs');
//express no es propia de node es un pack que se instala 
//const fs = require('express');
const { crearArchivo, listarTabla } = require('./multplicar/multiplicar')
const argv = require('./config/yargs').argv;
const colors = require('colors/safe')


let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.red(archivo)))
            .catch(e => console.log(e));
        break;
    default:
        console.log('comando no reconocido');
}