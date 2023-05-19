const googleSheet = require('../utils/spreeadSheet');
const cuentasService = require("../services/cuentasService")

const getCuentas = async (req, res) => {
    const {
        params: { cuentasPath },
    } = req;

    if (!cuentasPath) {
        res.status(400).send({
            status: "FAILED",
            data: { error: "Parameter ':cuentasPath' can not be empty" },
        });
        return;
    }

    try {
        const cuentas = cuentasService.getCuentas(cuentasPath)
        const registros = await googleSheet.accederGoogleSheet(cuentas.cuentasIdSheet, cuentas.sheetIndex);
        let data = [];
        data = [...data, cuentas.multiIndicadores]

        registros.filter(row => {
            return row["Título"] == cuentas.titulo
        }).map(row => {            
            data = [...data, [row.Fecha, row[`${cuentas.multiIndicadores[1]}`], row[`${cuentas.multiIndicadores[2]}`]]];
        })

        res.send([data]);

    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = {
    getCuentas
}