const DB = require("./json/pobrezaDB.json");

const getPobreza = (pobrezaPath) => {
    try {
        const pobrezaIdSheet = DB.pobreza.idSheet;
        let pobreza = DB.pobreza.indicadores.find((pobreza) => pobreza.path === pobrezaPath);
        pobreza = {pobrezaIdSheet, ...pobreza};
    
        if (!pobreza.path) {
          throw {
            status: 400,
            message: `Can't find dollar with the path '${pobrezaPath}'`,
          };
        }
    
        return pobreza;
      } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
      }
};

module.exports = {
    getPobreza
}