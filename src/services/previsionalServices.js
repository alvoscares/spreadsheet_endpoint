const Previsional = require("../database/Previsional");

const getPrevisional = (previsionalPath) => {
    try{
        const previsional = Previsional.getPrevisional(previsionalPath);
        return previsional;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getPrevisional,
}