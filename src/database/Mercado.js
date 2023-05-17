const DB = require("./json/mercadoDB.json");

const getMercado = (mercadoPath) => {
    try {
        const mercadoIdSheet = DB.mercado.idSheet;
        let mercado = DB.mercado.indicadores.find((mercado) => mercado.path === mercadoPath);
        mercado = {mercadoIdSheet, ...mercado};
    
        if (!mercado.path) {
          throw {
            status: 400,
            message: `Can't find dollar with the path '${mercadoPath}'`,
          };
        }
    
        return mercado;
      } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
      }
};

module.exports = {
    getMercado
}