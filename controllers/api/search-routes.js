const express = require('express');
const router = express.Router();
const { Post, User } = require('../models');

// Route to handle search queries
router.get('/posts/search', async (req, res) => {
  const query = req.query.q;
  try {
    const posts = await Post.findAll({
      where: {
        title: {
          [Op.iLike]: `%${query}%` // Case-insensitive search
        }
      },
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
    });
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to search posts' });
  }
});

module.exports = router;