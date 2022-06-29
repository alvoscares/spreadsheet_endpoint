let googleSheet = require('../utils/spreeadSheet');
const { idGenerator } = require('../utils/idGenerator'); 



const obtenerDatos = async (req, res) => {        
    const id =  idGenerator(req.requestInd)    
    const registros = await googleSheet.accederGoogleSheet(id);    
    let data = [];
    let dataChild = [] 
    if(req.requestMultiInd && req.requestInd == "Dólar") {
        dataChild.push(["Dólar","Blue", "CCL", "Solidario", "Oficial"])
        let datos = registros.filter(row => {     
        if (!row.Fecha >= req.requestDate) return null;           
        return row.Fecha >= req.requestDate && (row.Indicador == 'Blue'|| row.Indicador == 'CCL' || row.Indicador == 'Solidario'|| row.Indicador == 'Minorista')
        }).reduce((collector, item) => {
            const { index, result } = collector;
          
            const groupKey = item.Etiqueta;
            let groupedList = index[groupKey];
          
            if (!groupedList) {
              groupedList = index[groupKey] = [groupKey];
          
              result.push(groupedList);
            }
            groupedList.push(item.Valor);
          
            return collector;
          }, {
          
            index: {},
            result: [],
          
          }).result;
          
        
        res.send([[...dataChild, ...datos]])       
    } else {
        dataChild.push(["",req.requestTag])    
        registros.filter(row => {                                 
            return row.Indicador == req.requestInd 
        }).map(row => {        
                
            dataChild.push([row.Etiqueta, row.Valor]);                                            
            return dataChild
        })   
        data.push(dataChild)
        res.send(data)    
    }    
}
module.exports = {
    obtenerDatos: obtenerDatos
}