const googleSheet = require('../utils/spreeadSheet');
const salariosServices = require("../services/salariosServices")

const getSalarios = async (req, res) => {
    const {
        params: { salariosPath },
    } = req;

    if (!salariosPath) {
        res.status(400).send({
            status: "FAILED",
            data: { error: "Parameter ':salariosPath' can not be empty" },
        });
        return;
    }

    try {
        const salarios = salariosServices.getSalarios(salariosPath)
        const registros = await googleSheet.accederGoogleSheet(salarios.salariosIdSheet, salarios.sheetIndex);
        let data = [];
        data = [...data, salarios.multiIndicadores]

        registros.filter(row => {
            return row["Título"] == salarios.titulo
        }).map(row => {
            if(salarios.path == "ripte.json"){
                data = [...data, [row.Fecha, row[`${salarios.multiIndicadores[1]}`], row[`${salarios.multiIndicadores[2]}`]]];
            } else {
                data = [...data, [row.Fecha, row[`${salarios.multiIndicadores[1]}`], row[`${salarios.multiIndicadores[2]}`], row[`${salarios.multiIndicadores[3]}`]]];
            }            
        })

        res.send([data]);

    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = {
    getSalarios
}