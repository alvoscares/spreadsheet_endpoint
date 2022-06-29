const setRequestInfo = (indicador, etiqueta, indicadorMultiple) => {
    return (req, res, next) => {
      req.requestInd = indicador;                      
      req.requestTag = etiqueta;
      req.requestMultiInd = indicadorMultiple;     
      next();
    };
  };

  module.exports = {
    setRequestInfo : setRequestInfo
  }