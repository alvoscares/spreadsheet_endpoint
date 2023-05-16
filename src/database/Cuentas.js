const DB = require("./json/cuentasDB.json");

const getCuentas = (cuentasPath) => {
    try {
        const cuentasIdSheet = DB.cuentas.idSheet;
        let cuentas = DB.cuentas.indicadores.find((cuentas) => cuentas.path === cuentasPath);
        cuentas = {cuentasIdSheet, ...cuentas};
    
        if (!cuentas.path) {
          throw {
            status: 400,
            message: `Can't find dollar with the path '${cuentasPath}'`,
          };
        }
    
        return cuentas;
      } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
      }
};

module.exports = {
    getCuentas
}