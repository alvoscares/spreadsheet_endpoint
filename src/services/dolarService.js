const Dolar = require("../database/Dolar");

const getDolar = (dolarPath) => {
    try{
        const dolar = Dolar.getDolar(dolarPath);
        return dolar;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getDolar,
}