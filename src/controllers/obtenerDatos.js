let googleSheet = require('../utils/spreeadSheet');

const obtenerDatos = async (req, res) => {        
    const registros = await googleSheet.accederGoogleSheet("1_1CgtlIOa1cFK-GcLT2DpMNkOxZ5-ckiZXpF_aj2lNA");     
    let data = [];
    let dataChild = []
    console.log(req.requestInfo)
    registros.filter(row => {
        return row.Indicador == req.requestInfo
    }).map(row => {        
        dataChild.push([row.Etiqueta, row.Valor]);                                            
        return dataChild
    })           
    data.push(dataChild)
    res.send(data)    
    
}
module.exports = {
    obtenerDatos: obtenerDatos
}