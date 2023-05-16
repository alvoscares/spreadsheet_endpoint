const Precios = require("../database/Precios");

const getPrecios = (preciosPath) => {
    try{
        const precios = Precios.getPrecios(preciosPath);
        return precios;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getPrecios,
}