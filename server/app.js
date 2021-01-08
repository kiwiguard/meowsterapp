let express = require('express'),
cors = require('cors'),
mongoose = require('mongoose'),
database = require('./database'),
bodyParser = require('body-parser');

// connect mongoDB
mongoose.Promise = global.Promise;
mongoose.connect(database.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database connected')
    },
    err => {
        console.log('Error ' + err + ' when trying to connect to database')
    }
)

const meowAPI = require('./routes/meow.route')
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded ({
    extended: false
}));
app.use(cors());

// API
app.use('/api', meowAPI)

// Create port
const port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/dist'));
app.get(/.*/, (req, res) => res.sendFile(__dirname + '/dist/index.html'));
app.listen(port, () => {
    console.log('Connected to port ' + port)
});

// Find 404
app.use((req, res, next) => {
    next(createError(404));
});

// Error handling
app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});