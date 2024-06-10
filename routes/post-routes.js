const express = require('express');
const {getPost, getPosts, addPost, savePost, editPost, updatePost, deletePost} = require('../controllers/post-controller');
//создаем роутер, чтобы импортировать его в другой файл
const router = express.Router();

//обрабатываем все запросы
router.get('/posts', getPosts);
router.get('/posts/:id', getPost);
router.delete('/posts/:id', deletePost);
router.post('/add-post', savePost);
router.get('/add-post', addPost);
router.get('/edit/:id', editPost);
router.put('/edit/:id', updatePost);

module.exports = router;