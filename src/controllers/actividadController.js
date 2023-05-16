const googleSheet = require('../utils/spreeadSheet');
const actividadService = require("../services/actividadService")

const getActividad = async (req, res) => {
    const {
        params: { actividadPath },
    } = req;

    if (!actividadPath) {
        res.status(400).send({
            status: "FAILED",
            data: { error: "Parameter ':actividadPath' can not be empty" },
        });
        return;
    }

    try {
        const actividad = actividadService.getActividad(actividadPath)
        const registros = await googleSheet.accederGoogleSheet(actividad.actividadIdSheet);
        let data = [];
        
        data = [...data, ["", actividad.tag]];
        
        registros.filter(row => {
            if (actividadPath !== "emae.json"){
                return row["Título"] == actividad.titulo && row["Subtítulo"] == actividad.subTitulo;
            } else {
                return row["Título"] == actividad.titulo;
            }
        }).map(row => {
            data = [...data, [row.Fecha, row.Valor]];
            return data
        })


        res.send([data]);
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = {
    getActividad
}