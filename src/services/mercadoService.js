const Mercado = require("../database/Mercado");

const getMercado = (mercadoPath) => {
    try{
        const mercado = Mercado.getMercado(mercadoPath);
        return mercado;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getMercado,
}