const DB = require("./json/actividadDB.json");

const getActividad = (actividadPath) => {
    try {
        const actividadIdSheet = DB.actividad.idSheet;
        let actividad = DB.actividad.indicadores.find((actividad) => actividad.path === actividadPath);
        actividad = {actividadIdSheet, ...actividad};
    
        if (!actividad.path) {
          throw {
            status: 400,
            message: `Can't find dollar with the path '${actividadPath}'`,
          };
        }
    
        return actividad;
      } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
      }
};

module.exports = {
    getActividad
}