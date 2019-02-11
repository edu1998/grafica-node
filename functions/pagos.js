const md5 = require('md5');

const acountId = "512321";
const tax = 0;
const taxReturnBase = 0;

const generateCredential = (data) => {
    let credential = {
        signature : "",
        referenceCode : new Date().toISOString(),
        apiKey : '4Vj8eK4rloUd272L48hsrarnUA',
        mercanId : '508029',
        amount : data.valor,
        currency : 'COP',
        buyerEmail : data.email,
        acountId,
        tax,
        taxReturnBase
    }
    credential.signature = md5(`${credential.apiKey}~${credential.mercanId}~${credential.referenceCode}~${credential.amount}~${credential.currency}`);

    return credential;
}

module.exports = {
    generateCredential
}
