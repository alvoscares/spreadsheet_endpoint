const { GoogleSpreadsheet } = require('google-spreadsheet');

const credenciales = require('../json/credenciales.json');

async function accederGoogleSheet(googleId) {

    const documento = new GoogleSpreadsheet(googleId);
    await documento.useServiceAccountAuth(credenciales);
    await documento.loadInfo();

    const sheet = documento.sheetsByIndex[0];    
    const registros = await sheet.getRows();
    return registros
}



module.exports = {
    accederGoogleSheet: accederGoogleSheet,
}