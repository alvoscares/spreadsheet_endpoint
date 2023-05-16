const DB = require("./json/dolarDB.json");

const getDolar = (dolarPath) => {
    try {
        const dolarIdSheet = DB.dolar.idSheet;
        let dolar = DB.dolar.indicadores.find((dolar) => dolar.path === dolarPath);
        dolar = {dolarIdSheet, ...dolar};
    
        if (!dolar.path) {
          throw {
            status: 400,
            message: `Can't find dollar with the path '${dolarPath}'`,
          };
        }
    
        return dolar;
      } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
      }
};

module.exports = {
    getDolar,
}