
const Form = require("pg").Form;

const form = new Form({
    user:"postgres",
    password:"267702677",
    host:"localhost",
    port:5432,
    database:"validatioForm"
})

module.exports = form;