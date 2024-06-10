const Post = require("../models/post");
const createPath = require("../utils/create-path");


const handleError = (res, error) => { //функция для ошибок
    console.log(error);
    res.render(createPath('error'), {title: 'Error'});
};

const getPosts = (req, res) => {
    Post
        .find() //находим массив постов в базе даных
        .sort({createdAt: -1}) //сортируем по дате создания
        .then(posts => res.render(createPath("posts"), {title: "Posts", posts}))
        .catch(err => handleError(res, err))
}

const getPost = (req, res) => {
    Post
        .findById(req.params.id) //находим отдельный пост с помощью id
        .then(post =>  res.render(createPath("post"), {title: "Post", post}))
        .catch(err => handleError(res, err))
}

const deletePost = (req, res) => {
    Post
        .findByIdAndDelete(req.params.id) //находим и удаляем
        .then(result =>  res.sendStatus(200))
        .catch(err => handleError(res, err))
}

const savePost = (req, res) => {
    const {title, author, text} = req.body; //берем данные из тела запроса
    const post = new Post({title, author, text}); //создаем новый пост с помощью модели
    post
        .save() //сохраняем пост в базу данных
        .then((result) => res.redirect("/posts"))
        .catch(err => handleError(res, err))
}

const addPost = (req, res) => {
    res.render(createPath("add-post"), {title: "Add-post"})
}

const editPost = (req, res) => {
    Post
        .findById(req.params.id)
        .then(post => res.render(createPath("edit-post"), {title: "Edit Post", post}))
        .catch(err => handleError(res, err))
}

const updatePost = (req, res) => {
    const {title, author, text} = req.body; //берем измененные параметры из тела запроса
    const {id} = req.params; //берем id из параметров запроса
    Post
        .findByIdAndUpdate(id, {title, author, text}) //находим и обновляем пост
        .then(post => res.redirect(`/posts/${id}`))
        .catch(err => handleError(res, err))
}

module.exports = {
    getPost,
    getPosts,
    addPost,
    savePost,
    editPost,
    updatePost,
    deletePost
}