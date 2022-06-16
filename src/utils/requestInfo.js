const setRequestInfo = (indicador, region, fecha, etiqueta) => {
    return (req, res, next) => {
      req.requestInd = indicador;      
      req.requestReg = region;      
      req.requestDate = fecha;
      req.requestTag = etiqueta;      
      next();
    };
  };

  module.exports = {
    setRequestInfo : setRequestInfo
  }