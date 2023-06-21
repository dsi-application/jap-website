const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const fs = require('fs');
const app = express();
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })
  
  app.use(cors());
// Create Article schema
const ArticleSchema = new mongoose.Schema({
  id: String,
  lng: String,
  titre: String,
  content: String,
  description: String,
  photo: String,
});

// Create Article model
const Article = mongoose.model('Article', ArticleSchema);

// Parse JSON bodies
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Create an article
app.post('/articles', upload.single('photo'), async (req, res) => {
    const { lng, titre, content, description } = req.body;
    const photo = req.file;
  
    try {
      let filename = '';
      if (photo) {
        filename = `${Date.now()}-${photo.originalname}`;
        fs.renameSync(photo.path, `uploads/${filename}`);
      }
  
      const article = await Article.create({
        lng,
        titre,
        content,
        description,
        photo: filename,
      });
  
      res.status(201).json(article);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'An error occurred' });
    }
  });

  

  
// Get all articles
app.get('/articles', async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (err) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Get a specific article by ID
app.get('/articles/:id', async (req, res) => {
    try {
      const article = await Article.findById(req.params.id);
      if (article) {
        res.json(article);
      } else {
        res.status(404).json({ message: 'Article not found' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'An error occurred' });
    }
  });
//get article by id




// Update an article by ID
app.put('/articles/:id', async (req, res) => {
  const { id } = req.params;
  const { lng, titre, content, description } = req.body;

  try {
    const article = await Article.findOneAndUpdate(
      { id },
      { lng, titre, content, description },
      { new: true }
    );

    if (article) {
      res.json(article);
    } else {
      res.status(404).json({ message: 'Article not found' });
    }
  } catch (err) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Delete an article by ID
app.delete('/articles/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const article = await Article.findByIdAndRemove( req.params.id );

    if (article) {
      res.json(article);
    } else {
      res.status(404).json({ message: 'Article not found' });
    }
  } catch (err) {
    res.status(500).json({ error: 'An error occurred' });
  }
});
//mongo
const mongoconnection = require("./config/mongoconnection.json");
mongoose.connect(mongoconnection.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection eroor :"));
db.once("open", function () {
  console.log("Connect to Mongo Database !");
});
// Start the server
const port = 3002;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
