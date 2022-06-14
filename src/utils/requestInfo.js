const setRequestInfo = (indicador, region, fecha) => {
    return (req, res, next) => {
      req.requestInd = indicador;      
      req.requestReg = region;      
      req.requestDate = fecha;      
      next();
    };
  };

  module.exports = {
    setRequestInfo : setRequestInfo
  }