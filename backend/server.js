const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());

//local
const uri = 'mongodb://localhost:27017/local';

//internet
//const uri =
('mongodb+srv://murat:asdasd@cluster0-2yepv.gcp.mongodb.net/test?retryWrites=true&w=majority');

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('Veri tabanına bağlandık, her şey hazır.');
});

const soldierRouter = require('./routes/soldier');
const soldierGroupsRouter = require('./routes/soldierGroups');

const postRouter = require('./routes/post');
const postGroupsRouter = require('./routes/postGroups');
const posttimeRouter = require('./routes/posttime');

const commanderRouter = require('./routes/commander');
const noncomRouter = require('./routes/noncom');
const rulesRouter = require('./routes/rules');

app.use(bodyParser.json());

app.use('/soldier', soldierRouter);
app.use('/soldiergroups', soldierGroupsRouter);

app.use('/post', postRouter);
app.use('/postgroups', postGroupsRouter);

app.use('/posttime', posttimeRouter);

app.use('/commander', commanderRouter);
app.use('/noncom', noncomRouter);
app.use('/rules', rulesRouter);

app.listen(port, () => {
  console.log('Şu port hizmete açılıyor: ' + port);
});
