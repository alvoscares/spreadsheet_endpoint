const express = require('express');
const dolarRoute = require('./routes/dolarRoutes')
const preciosRoute = require('./routes/preciosRoutes')
const actividadRoute = require('./routes/actividadRoutes')
const cuentasRoute = require('./routes/cuentasRoutes')
const mercadoRoute = require('./routes/mercadoRoutes');
const salariosRoute = require('./routes/salariosRoutes')
const previsionalRoute = require('./routes/previsionalRoutes')
const pobrezaRoute = require('./routes/pobrezaRoutes')

const app = express();

app.use("/dolar", dolarRoute);
app.use("/precios", preciosRoute);
app.use("/actividad", actividadRoute);
app.use("/cuentas", cuentasRoute);
app.use("/mercado", mercadoRoute);
app.use("/salarios", salariosRoute);
app.use("/previsional", previsionalRoute);
app.use("/pobreza", pobrezaRoute);

module.exports = app;