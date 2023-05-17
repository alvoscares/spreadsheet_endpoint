const googleSheet = require('../utils/spreeadSheet');
const mercadoService = require("../services/mercadoService")

const getMercadoTasa = async (req, res) => {
    const {
        params: { mercadoPath },
    } = req;

    if (!mercadoPath) {
        res.status(400).send({
            status: "FAILED",
            data: { error: "Parameter ':mercadoPath' can not be empty" },
        });
        return;
    }

    try {
        const mercado = mercadoService.getMercado(mercadoPath)
        const registros = await googleSheet.accederGoogleSheet(mercado.mercadoIdSheet, mercado.sheetIndex);
        let data = [];
        let fechaNacion = [["Nación", mercado.titulo]];
        let fechaCordoba = [["Gran Córdoba", mercado.titulo]];
        let fechaCABA = [["CABA", mercado.titulo]];
        let fechaConurbano = [["Conurbano", mercado.titulo]];
        let fechaRosario = [["Gran Rosario", mercado.titulo]];
        let fechaMendoza = [["Gran Mendoza", mercado.titulo]];
        let fechaTucuman = [["Gran Tucumán - T. Viejo", mercado.titulo]];

        const valores = registros.filter(row => {

            return row["Título"] == mercado.titulo;

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

const getMercadoEph = async (req, res) => {
    const {
        params: { mercadoPath },
    } = req;

    if (!mercadoPath) {
        res.status(400).send({
            status: "FAILED",
            data: { error: "Parameter ':mercadoPath' can not be empty" },
        });
        return;
    }

    try {
        const mercado = mercadoService.getMercado(mercadoPath)
        const registros = await googleSheet.accederGoogleSheet(mercado.mercadoIdSheet, mercado.sheetIndex);
        let data = [];

        if (mercadoPath !== "epc.json") {
            data = [...data,["ALVO", "Asalariados Registrados", "Asalariados No Registrados", "No Asalariados"]]
            registros.filter(row => {
                return row["Título"] == mercado.titulo
            }).map(row => {
                data = [...data, [row.Fecha, row["Asalariados Registrados"], row["Asalariados No Registrados"], row["No Asalariados"]]];
            })

        } else {
            data = [...data,["ALVO", "Asalariados privados", "Asalariados públicos", "Trabajadores en casas particulares", "Autónomos", "Monotributistas"]]
            registros.filter(row => {
                return row["Título"] == mercado.titulo
            }).map(row => {
                data = [...data, [row.Fecha, row["Asalariados privados"], row["Asalariados públicos"], row["Trabajadores en casas particulares"], row["Autónomos"], row["Monotributistas"]]];
            })
        }

        // registros.filter(row => {
        //     return row["Título"] == mercado.titulo
        //   }).map(row => {
        //     if ( mercadoPath !== "epc.json") {
        //         data = [["ALVO","Asalariados Registrados", "Asalariados No Registrados", "No Asalariados"]]
        //         data = [...data, [row.Fecha, row["Asalariados Registrados"], row["Asalariados No Registrados"], row["No Asalariados"]]];
        //     } else {
        //         data = [["ALVO","Asalariados privados", "Asalariados públicos", "Trabajadores en casas particulares", "Autónomos", "Monotributistas"]]
        //         data = [...data, [row.Fecha, row["Asalariados privados"], row["Asalariados públicos"], row["Trabajadores en casas particulares"], row["Autónomos"], row["Monotributistas"]]];
        //     }
        //     return data
        //   })

        res.send([data]);

    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = {
    getMercadoTasa,
    getMercadoEph
}