const DB = require("./json/salariosDB.json");

const getSalarios = (salariosPath) => {
    try {
        const salariosIdSheet = DB.salarios.idSheet;
        let salarios = DB.salarios.indicadores.find((salarios) => salarios.path === salariosPath);
        salarios = {salariosIdSheet, ...salarios};
    
        if (!salarios.path) {
          throw {
            status: 400,
            message: `Can't find dollar with the path '${salariosPath}'`,
          };
        }
    
        return salarios;
      } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
      }
};

module.exports = {
    getSalarios
}