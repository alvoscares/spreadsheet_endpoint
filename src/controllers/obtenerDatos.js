let googleSheet = require('../utils/spreeadSheet');
const { idGenerator } = require('../utils/idGenerator'); 



const obtenerDatos = async (req, res) => {        
    const id =  idGenerator(req.requestInfo)    
    const registros = await googleSheet.accederGoogleSheet(id);    
    let data = [];
    let dataChild = []    
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