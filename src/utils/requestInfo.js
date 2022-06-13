const setRequestInfo = (indicador, region) => {
    return (req, res, next) => {
      req.requestInd = indicador;      
      req.requestReg = region;      
      next();
    };
  };

  module.exports = {
    setRequestInfo : setRequestInfo
  }