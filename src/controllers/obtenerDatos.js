let googleSheet = require('../utils/spreeadSheet');
const { idGenerator } = require('../utils/idGenerator'); 



const obtenerDatos = async (req, res) => {        
    const id =  idGenerator(req.requestInd)    
    const registros = await googleSheet.accederGoogleSheet(id);    
    let data = [];
    let dataChild = []    
    registros.filter(row => {
        if(req.requestReg) {            
            return row.Indicador == req.requestInd && row.Región == req.requestReg
        }
        return row.Indicador == req.requestInd 
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