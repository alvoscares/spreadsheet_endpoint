const setRequestInfo = (text) => {
    return (req, res, next) => {
      req.requestInfo = text;
      next();
    };
  };

  module.exports = {
    setRequestInfo : setRequestInfo
  }