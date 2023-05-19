const Salarios = require("../database/Salarios");

const getSalarios = (salariosPath) => {
    try{
        const salarios = Salarios.getSalarios(salariosPath);
        return salarios;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getSalarios,
}