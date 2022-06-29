const setRequestInfo = (indicador, region, etiqueta, indicadorMultiple) => {
    return (req, res, next) => {
      req.requestInd = indicador;      
      req.requestReg = region;            
      req.requestTag = etiqueta;
      req.requestMultiInd = indicadorMultiple;     
      next();
    };
  };

  module.exports = {
    setRequestInfo : setRequestInfo
  }