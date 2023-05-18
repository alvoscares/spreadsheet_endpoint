const googleSheet = require('../utils/spreeadSheet');
const pobrezaService = require("../services/pobrezaService")

const getPobrezaTasa = async (req, res) => {
    const {
        params: { pobrezaPath },
    } = req;

    if (!pobrezaPath) {
        res.status(400).send({
            status: "FAILED",
            data: { error: "Parameter ':pobrezaPath' can not be empty" },
        });
        return;
    }

    try {
        const pobreza = pobrezaService.getPobreza(pobrezaPath)
        const registros = await googleSheet.accederGoogleSheet(pobreza.pobrezaIdSheet, pobreza.sheetIndex);
        let data = [];
        let fechaNacion = [["Nación", pobreza.titulo]];
        let fechaCordoba = [["Gran Córdoba", pobreza.titulo]];
        let fechaCABA = [["CABA", pobreza.titulo]];
        let fechaConurbano = [["Conurbano", pobreza.titulo]];
        let fechaRosario = [["Gran Rosario", pobreza.titulo]];
        let fechaMendoza = [["Gran Mendoza", pobreza.titulo]];
        let fechaTucuman = [["Gran Tucumán - T. Viejo", pobreza.titulo]];

        const valores = registros.filter(row => {

            return row["Título"] == pobreza.titulo;

        });

        for (var i = 0; i < valores.length; i++) {
            var row = valores[i];

            fechaNacion = [...fechaNacion, [row.Fecha, row["Nación"]]];
            fechaCordoba = [...fechaCordoba, [row.Fecha, row["Gran Córdoba"]]];
            fechaCABA = [...fechaCABA, [row.Fecha, row["CABA"]]];
            fechaConurbano = [...fechaConurbano, [row.Fecha, row["Conurbano"]]];
            fechaRosario = [...fechaRosario, [row.Fecha, row["Gran Rosario"]]];
            fechaMendoza = [...fechaMendoza, [row.Fecha, row["Gran Mendoza"]]];
            fechaTucuman = [...fechaTucuman, [row.Fecha, row["Gran Tucumán - T. Viejo"]]];

        }

        data = [fechaNacion, fechaCordoba, fechaCABA, fechaConurbano, fechaRosario, fechaMendoza, fechaTucuman];

        res.send(data);

    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const getPobrezaCanasta = async (req, res) => {
    const {
        params: { pobrezaPath },
    } = req;

    if (!pobrezaPath) {
        res.status(400).send({
            status: "FAILED",
            data: { error: "Parameter ':pobrezaPath' can not be empty" },
        });
        return;
    }

    try {
        const pobreza = pobrezaService.getPobreza(pobrezaPath)
        const registros = await googleSheet.accederGoogleSheet(pobreza.pobrezaIdSheet, pobreza.sheetIndex);
        let data = [];
        data = [...data, pobreza.multiIndicadores]

        registros.filter(row => {
            return row["Título"] == pobreza.titulo
        }).map(row => {
            data = [...data, [row.Fecha, row["Canasta"], row["Inflación"]]];
        })


        res.send([data]);

    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = {
    getPobrezaTasa,
    getPobrezaCanasta
}