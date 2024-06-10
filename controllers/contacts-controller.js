const Contacts = require("../models/contacts");
const createPath = require("../utils/create-path");

const getContacts = (req, res) => {
    Contacts
        .find() //находим массив contacts в базе данных
        .then(contacts => res.render(createPath("contacts"), {contacts, title: "Contacts"})) //отрисовываем страницу, передаем в нее массив контактов
        .catch(err => {
            console.log(err);
            res.render(createPath('error'), {title: 'Error'});
        })
}

module.exports = getContacts;