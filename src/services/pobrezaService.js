const Pobreza = require("../database/Pobreza");

const getPobreza = (pobrezaPath) => {
    try{
        const pobreza = Pobreza.getPobreza(pobrezaPath);
        return pobreza;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getPobreza,
}