let googleSheet = require('../utils/spreeadSheet');
const { idGenerator } = require('../utils/idGenerator'); 



const obtenerDatos = async (req, res) => {        
    const id =  idGenerator(req.requestInd)    
    const registros = await googleSheet.accederGoogleSheet(id);    
    let data = [];
    let dataChild = [] 
    if(req.requestMultiInd && req.requestInd == "Dólar") {
        dataChild.push(["Dólar", "Solidario", "Blue", "CCL", "Oficial"])
        let datos = registros.filter(row => {                    
        return row.Indicador == 'Dólar blue'|| row.Indicador == 'Dólar CCL' || row.Indicador == 'Dólar solidario'|| row.Indicador == 'Dólar minorista'
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