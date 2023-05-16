const Cuentas = require("../database/Cuentas");

const getCuentas = (cuentasPath) => {
    try{
        const cuentas = Cuentas.getCuentas(cuentasPath);
        return cuentas;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getCuentas,
}