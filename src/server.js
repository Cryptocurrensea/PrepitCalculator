import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';
import path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, '/build')))
app.use(bodyParser.json());

const withDB = async(opertions, res) => {
  try {
    const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });
    const db = client.db('prepitcalc');

    await opertions(db);
    client.close();
  }
  catch (error) {
    res.status(500).json({ message: 'Error connecting to mongodb', error });
  }
}

app.get('/api/:name', async (req, res) => {
  withDB( async (db) => {
    const pageName = req.params.name;

    const pageInfo = await db.collection('pageInfo').findOne({ name: pageName });
    res.status(200).json(pageInfo);
  }, res)
})


app.get('/api/:name/visits',async (req,res) => {
  withDB(async(db) =>{
    const pageName = req.params.name;
    const pageInfo = await db.collection('pageInfo').findOne({ name: pageName });
    await db.collection('pageInfo').updateOne({ name: pageName }, {
      '$set': {
        visits: pageInfo.visits + 1,
      },
    });
    const updatedPageInfo = await db.collection('pageInfo').findOne({ name: pageName });
    res.status(200).json(updatedPageInfo);
  }, res);
});



app.post('/api/:name/add-comment', (req,res) => {
  const { username , text } = req.body;
  const pageName = req.params.name;

  withDB(async(db) =>{
    const pageInfo = await db.collection('pageInfo').findOne({ name: pageName });
    await db.collection('pageInfo').updateOne({ name: pageName }, {
      '$set': {
        comments: pageInfo.comments.concat({ username, text}),
      },
    });
    const updatedPageInfo = await db.collection('pageInfo').findOne({ name: pageName });
    res.status(200).json(updatedPageInfo);

  },res);
});

app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname + '/build/index.html'));
});

app.listen(8000,() => console.log('Listening on port 8000')); 