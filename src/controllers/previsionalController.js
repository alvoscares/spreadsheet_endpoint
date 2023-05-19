const googleSheet = require('../utils/spreeadSheet');
const previsionalServices = require("../services/previsionalServices")

const getPrevisional = async (req, res) => {
    const {
        params: { previsionalPath },
    } = req;

    if (!previsionalPath) {
        res.status(400).send({
            status: "FAILED",
            data: { error: "Parameter ':previsionalPath' can not be empty" },
        });
        return;
    }

    try {
        const previsional = previsionalServices.getPrevisional(previsionalPath)
        const registros = await googleSheet.accederGoogleSheet(previsional.previsionalIdSheet);
        let data = [];
        data = [...data, previsional.multiIndicadores]

        registros.filter(row => {
            return row["Título"] == previsional.titulo
        }).map(row => {
            data = [...data, [row.Fecha, row[`${previsional.multiIndicadores[1]}`], row[`${previsional.multiIndicadores[2]}`]]];
        })

        res.send([data]);

    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = {
    getPrevisional
}