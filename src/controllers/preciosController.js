const googleSheet = require('../utils/spreeadSheet');
const preciosService = require("../services/preciosService")

const getPrecios = async (req, res) => {
    const {
        params: { preciosPath },
    } = req;

    if (!preciosPath) {
        res.status(400).send({
            status: "FAILED",
            data: { error: "Parameter ':preciosPath' can not be empty" },
        });
        return;
    }

    try {
        const precios = preciosService.getPrecios(preciosPath)
        const registros = await googleSheet.accederGoogleSheet(precios.preciosIdSheet);
        let data = [];
        
        data = [...data, ["", precios.tag]];
        
        registros.filter(row => {
            return row["Título"] == precios.titulo
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
    getPrecios
}