const  apiConfig  = require('../json/apiConfig.json');

const idGenerator =  (name) => {
    let id;       
    switch (name) {
        case 'Blue':
        case 'CCL':
        case 'Solidario':
        case 'Minorista':
          id = apiConfig.blocks.dolar.id
          break;
        case 'EMAE desestacionalizado (variación mensual)':
        case 'PBI a precios constantes (variación interanual)':
          id = apiConfig.blocks.actividad.id
          break;   
        case 'Haber medio':        
          id = apiConfig.blocks.previsional.id
          break;  
        case 'Índice Total de Salarios (variación interanual)':
          id = apiConfig.blocks.salarios.id
          break;
        default:
          console.log('Lo lamentamos, por el momento no disponemos de ese INDICADOR');
      }
    return id
}

module.exports = {
    idGenerator: idGenerator
}