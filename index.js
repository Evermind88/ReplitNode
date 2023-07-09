const express = require('express'); //i
const mongoose = require('mongoose'); //i
const cookieSession = require('cookie-session'); //cookie session can store 4kb of data, can store more with express session if needed
const passport = require('passport'); //i
const keys = require('./config/keys');
require('./models/User'); //order of require statement can matter
require('./services/passport');

mongoose.connect(keys.mongoURI);
const app = express();

app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [ keys.cookieKey ]
	})
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authroutes')(app);
const PORT = process.env.PORT || 5000;
app.listen(PORT);
