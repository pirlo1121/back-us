const { Router } = require('express');
const { createPost, getPosts, removePost } = require('../controller/post.controller');

const router = Router();



router.post('/',createPost);
router.get('/',getPosts);
router.delete('/:id', removePost);

module.exports = router;

