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
    let dataChild = [];
    //todo : Rearmar el metedo de comparacion mas eficiente.
    if (dolar.path === "comparacion") {
      data = [...data, ["Dólar", "Ahorro", "Blue", "MEP", "CCL", "Oficial"]];
      let agrupadoPorFecha = registros.filter(row =>
        dolar.multiIndicadores.includes(row["Título"])
      ).reduce((collector, item) => {
        const { index, result } = collector;

        const groupKey = item.Fecha;
        let groupedList = index[groupKey];

        if (!groupedList) {
          groupedList = index[groupKey] = [groupKey];

          result.push(groupedList);
        }
        groupedList.push(item["Dólar"]);

        return collector;
      }, {

        index: {},
        result: [],

      }).result;

      data = [...data, agrupadoPorFecha];

    } else {
      data = [...data, ["", dolar.tag]];
      registros.filter(row => {
        return row["Título"] == dolar.titulo
      }).map(row => {
        data = [...data, [row.Fecha, row["Dólar"]]];
        return data
      })
    }

    // res.send({ status: "OK", data: data });
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