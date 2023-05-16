const { GoogleSpreadsheet } = require('google-spreadsheet');

const credenciales = require('../database/json/credenciales.json');

async function accederGoogleSheet(googleId, index = 0) {

    const documento = new GoogleSpreadsheet(googleId);
    await documento.useServiceAccountAuth(credenciales);
    await documento.loadInfo();

    const sheet = documento.sheetsByIndex[index];    
    const registros = await sheet.getRows();
    return registros
}



module.exports = {
    accederGoogleSheet: accederGoogleSheet,
}