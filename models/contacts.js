const mongoose = require("mongoose");
const Schema = mongoose.Schema; //создаем схему


const contactsSchema = new Schema({ //прописываем какого типа должны быть значения
    name: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    }
});

const Contacts = mongoose.model("Contacts", contactsSchema); //создаем модель (название и схема)

module.exports = Contacts;