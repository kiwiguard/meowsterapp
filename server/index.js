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

// Handle production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(__dirname + '/public'));

    // Handle SPA
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

// Create port
const port = process.env.PORT || 5000;
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