const  apiConfig  = require('../../database/json/apiConfig.json');

const {blocks} = apiConfig;

const indicator = {
  'Estimador Mensual de Actividad Económica (EMAE)': blocks.actividad.id,
  'Producto Bruto Interno (PBI)': blocks.actividad.id,
  'Gasto primario (Nación)': blocks.cuentas.id,
  'Dólar blue': blocks.dolar.id,
  'Dólar CCL': blocks.dolar.id,
  'Dólar solidario': blocks.dolar.id,
  'Dólar oficial': blocks.dolar.id,
  'Dólar MEP': blocks.dolar.id,
  'Dólar': blocks.dolar.id,
  'Presión sobre el mercado laboral (Córdoba)': blocks.mercado.id,
  'Tasa de ocupados demandantes (Córdoba)': blocks.mercado.id,
  'Tasa de desocupación (Nación)': blocks.mercado.id,
  'Tasa de desocupación (Córdoba)': blocks.mercado.id,
  'Empleo registrado (Nación)': blocks.mercado.id,
  'Tasa de pobreza (Córdoba)': blocks.pobreza.id,                        
  'Tasa de pobreza (Nación)': blocks.pobreza.id,
  'Haber medio (Córdoba)': blocks.previsional.id,
  'Inflación Córdoba (IPC)': blocks.precios.id,
  'Inflación Nación (IPC)': blocks.precios.id,
  'Salarios (Índice de Salarios)': blocks.salarios.id,
}

const indicatorDefault = 'Lo lamentamos, por el momento no disponemos de ese INDICADOR'

module.exports = {
    indicator,
    indicatorDefault
}