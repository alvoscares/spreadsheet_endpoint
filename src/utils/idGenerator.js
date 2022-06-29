const  apiConfig  = require('../json/apiConfig.json');

const idGenerator =  (name) => {
    let id;       
    switch (name) {
        case 'EMAE desestacionalizado (variación mensual)':
        case 'PBI a precios constantes (variación interanual)':
          id = apiConfig.blocks.actividad.id
          break; 
        case 'Gasto (variación interanual)':
          id = apiConfig.blocks.cuentas.id
          break; 
        case 'Dólar blue':
        case 'Dólar CCL':
        case 'Dólar solidario':
        case 'Dólar minorista':
        case 'Dólar':
          id = apiConfig.blocks.dolar.id
          break;                          
        case 'Presión sobre el mercado laboral':
        case 'Tasa de ocupados demandantes':
        case 'Tasa de desocupación':
        case 'Empleo Registrado (SIPA)':
          id = apiConfig.blocks.mercado.id
          break;        
        case 'Tasa de pobreza (personas)':                        
          id = apiConfig.blocks.pobreza.id
          break;
        case 'Haber medio':        
          id = apiConfig.blocks.previsional.id
          break;  
        case 'IPC (variación mensual)':        
          id = apiConfig.blocks.precios.id
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