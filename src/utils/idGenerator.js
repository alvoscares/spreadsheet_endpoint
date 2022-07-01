const  apiConfig  = require('../json/apiConfig.json');

const idGenerator =  (name) => {
    let id;       
    switch (name) {
        case 'Estimador Mensual de Actividad Económica (EMAE)':
        case 'Producto Bruto Interno (PBI)':
          id = apiConfig.blocks.actividad.id
          break; 
        case 'Gasto primario (Nación)':
          id = apiConfig.blocks.cuentas.id
          break; 
        case 'Dólar blue':
        case 'Dólar CCL':
        case 'Dólar solidario':
        case 'Dólar oficial':
        case 'Dólar MEP':
        case 'Dólar':
          id = apiConfig.blocks.dolar.id
          break;                          
        case 'Presión sobre el mercado laboral (Córdoba)':
        case 'Tasa de ocupados demandantes (Córdoba)':
        case 'Tasa de desocupación (Nación)':
        case 'Tasa de desocupación (Córdoba)':
        case 'Empleo registrado (Nación)':
          id = apiConfig.blocks.mercado.id
          break;        
        case 'Tasa de pobreza (Córdoba)':                        
        case 'Tasa de pobreza (Nación)': 
          id = apiConfig.blocks.pobreza.id
          break;
        case 'Haber medio (Córdoba)':        
          id = apiConfig.blocks.previsional.id
          break;  
        case 'Inflación Córdoba (IPC)':        
        case 'Inflación Nación (IPC)':        
          id = apiConfig.blocks.precios.id
          break;
        case 'Salarios (Índice de Salarios)':
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