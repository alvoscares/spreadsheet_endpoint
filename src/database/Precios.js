const DB = require("./json/preciosDB.json");

const getPrecios = (preciosPath) => {
    try {
        const preciosIdSheet = DB.precios.idSheet;
        let precios = DB.precios.indicadores.find((precios) => precios.path === preciosPath);
        precios = {preciosIdSheet, ...precios};
    
        if (!precios.path) {
          throw {
            status: 400,
            message: `Can't find dollar with the path '${preciosPath}'`,
          };
        }
    
        return precios;
      } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
      }
};

module.exports = {
    getPrecios
}