const Actividad = require("../database/Actividad");

const getActividad = (actividadPath) => {
    try{
        const actividad = Actividad.getActividad(actividadPath);
        return actividad;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getActividad,
}