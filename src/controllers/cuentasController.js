const googleSheet = require('../utils/spreeadSheet');
const cuentasService = require("../services/cuentasService")
//DB de prueba. Borrar
const PruebaDB = require('../database/json/PruebasGraficos.json')

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
        
        data = [...data, ["", cuentas.tag]];
        
        registros.filter(row => {
            return row["Título"] == cuentas.titulo
        }).map(row => {
            if (cuentasPath === "ingresos-gastos") {
                data = [...data, [row.Fecha, row.Gastos]];
            }
            if (cuentasPath === "tasas") {
                data = [...data, [row.Fecha, row.Tesoro]];
            }
            return data
        })


        res.send({ status: "OK", data: data });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

//Prueba de graficos
const getPrueba = async (req, res) => {
    
    try {
        
        let data = PruebaDB;

        res.send(data);
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

//todo: Hacer el get para las cuentas Déficit fiscal y cuasifiscal (Nación)

module.exports = {
    getCuentas,
    getPrueba
}