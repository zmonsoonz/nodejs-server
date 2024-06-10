const mongoose = require("mongoose");
const Schema = mongoose.Schema; //создаем схему


const postSchema = new Schema({ //прописываем какого типа должны быть значения
    text: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    }
}, {timestamps: true}); //добавляет время создания

const Post = mongoose.model("Post", postSchema); //создаем модель (название и схема)

module.exports = Post;