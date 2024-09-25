const Post = require('../models/Post');

exports.createPost = async (req, res) => {
  const { title, content } = req.body;
  const author = req.user.name;

  try {
    const post = await Post.create({ title, content, author });
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create post' });
  }
};

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve posts' });
  }
};
