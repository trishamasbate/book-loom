const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "Loved this book, couldn't put it down!",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: "This review was very insightful.",
    user_id: 2,
    post_id: 1,
  },
  {
    comment_text: "I found the book a bit slow in the middle.",
    user_id: 3,
    post_id: 1,
  },
  {
    comment_text: "Can I borrow this book?",
    user_id: 4,
    post_id: 1,
  },
  {
    comment_text: "I had a different take on this book.",
    user_id: 5,
    post_id: 1,
  },
  {
    comment_text: "Amazing review, thanks for sharing!",
    user_id: 1,
    post_id: 2,
  },
  {
    comment_text: "I also loved this book!",
    user_id: 2,
    post_id: 2,
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;