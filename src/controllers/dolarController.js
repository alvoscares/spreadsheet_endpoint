const googleSheet = require('../utils/spreeadSheet');
const dolarService = require("../services/dolarService")

const getDolar = async (req, res) => {
  const {
    params: { dolarPath },
  } = req;

  if (!dolarPath) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':dolarPath' can not be empty" },
    });
    return;
  }

  try {
    const dolar = dolarService.getDolar(dolarPath)
    const registros = await googleSheet.accederGoogleSheet(dolar.dolarIdSheet);
    let data = [];
    if (dolar.path === "comparacion.json") {

      const datos = {};

      registros.forEach(registro => {
        const titulo = registro["Título"];
        const fecha = registro.Fecha;
        const valor = registro["Dólar"];

        // si la fecha ya tiene un valor para este dolar, actualizamos el valor
        if (datos[fecha] && datos[fecha][titulo]) {
          datos[fecha][titulo] = valor;
        } else { // si no, agregamos un nuevo objeto para la fecha y el dolar correspondiente
          if (!datos[fecha]) {
            datos[fecha] = {};
          }
          datos[fecha][titulo] = valor;
        }
      });

      // construimos el nuevo array a partir de los datos almacenados en el objeto
      const nuevoArray = [["", "Dólar ahorro", "Dólar blue", "Dólar MEP", "Dólar CCL", "Dólar oficial"]];
      Object.keys(datos).forEach(fecha => {
        const valores = [fecha];
        const dolarAhorro = datos[fecha]["Dólar ahorro"] || "";
        const dolarBlue = datos[fecha]["Dólar blue"] || "";
        const dolarMep = datos[fecha]["Dólar MEP"] || "";
        const dolarCcl = datos[fecha]["Dólar CCL"] || "";
        const dolarOficial = datos[fecha]["Dólar oficial"] || "";
        valores.push(dolarAhorro, dolarBlue, dolarMep, dolarCcl, dolarOficial);
        nuevoArray.push(valores);
      });

      data = nuevoArray;

    } else {
      data = [...data, ["", dolar.tag]];
      registros.filter(row => {
        return row["Título"] == dolar.titulo
      }).map(row => {
        data = [...data, [row.Fecha, row["Dólar"]]];
        return data
      })
    }

    res.send([data]);
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  getDolar
}