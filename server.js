// Importing required modules and dependencies
const express = require("express");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const routes = require("./controllers");
const sequelize = require("./config/connection");
const exphbs = require("express-handlebars");
const hbs = exphbs.create({ helpers: require("./utils/helpers") });
const { Op } = require("sequelize");
const { Post, User } = require('./models'); // Ensure you import your models

// Creating express app and setting port
const app = express();
const PORT = process.env.PORT || 3001;

// Setting up session object with secret, cookie, and store
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// Using session middleware with session object
app.use(session(sess));
// Parsing incoming JSON and URL-encoded data

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// IMPORTANT FOR PUBLIC FOLDERS - serving static files such as images from public directory
app.use(express.static("public"));
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// Using session middleware again with a different session object
app.use(
  session({
    secret: process.env.SECRET,
    store: new SequelizeStore({ db: sequelize }),
    resave: false,
    saveUninitialized: false,
  })
);

// Adding search route
app.get('/api/posts/search', async (req, res) => {
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

// Using routes from controller
app.use(routes);
// Syncing sequelize models with database and starting server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
});