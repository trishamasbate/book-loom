const { Post } = require("../models");

const postData = [
  {
    title: "The Road",
    author: "Cormac McCarthy",
    synopsis: "A post-apocalyptic novel that follows a father and his young son as they traverse a desolate landscape, struggling to survive. The novel explores themes of survival, love, and the will to live.",
    user_id: 1,
  },
  {
    title: "Life of Pi",
    author: "Yann Martel",
    synopsis: "A young boy named Pi survives a shipwreck and is left stranded on a lifeboat with a Bengal tiger named Richard Parker. The novel is a story of survival, faith, and the relationship between humans and animals.",
    user_id: 2,
  },
  {
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    synopsis: "A story of friendship and redemption set against the backdrop of a changing Afghanistan. The novel follows the journey of Amir, who struggles with his past and seeks to make amends for his mistakes.",
    user_id: 3,
  },
  {
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    synopsis: "A thriller that introduces the character of Lisbeth Salander, a brilliant hacker with a troubled past. The novel combines mystery, intrigue, and social commentary as Salander and journalist Mikael Blomkvist investigate a decades-old disappearance.",
    user_id: 4,
  },
  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    synopsis: "A mystery thriller that follows symbologist Robert Langdon as he uncovers secrets hidden in the works of Leonardo da Vinci. The novel explores themes of religion, art, and conspiracy.",
    user_id: 5,
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
