const DB = require("./json/previsionalDB.json");

const getPrevisional = (previsionalPath) => {
    try {
        const previsionalIdSheet = DB.previsional.idSheet;
        let previsional = DB.previsional.indicadores.find((previsional) => previsional.path === previsionalPath);
        previsional = {previsionalIdSheet, ...previsional};
    
        if (!previsional.path) {
          throw {
            status: 400,
            message: `Can't find dollar with the path '${previsionalPath}'`,
          };
        }
    
        return previsional;
      } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
      }
};

module.exports = {
    getPrevisional
}