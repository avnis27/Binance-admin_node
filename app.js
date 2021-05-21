var express = require('express');
var cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');
var createError = require('http-errors');
var flash = require('req-flash');
var logger = require('morgan');
var path = require('path');
var cors = require('cors');
var md5 = require('md5');

/* Database connection */
require("./mongo");

/* require all Models */
require("./model/admin");
require("./model/users");
require("./model/blogs");
require("./model/support");
require("./model/usersrole");
require("./model/forgotpass");
require("./model/user_groups");
require("./model/emailtemplate");
require("./model/sendemail_list");
require("./model/announcement");
require("./model/announcement_category");

require("./model/evotbonus");
require("./model/advertising");
require("./model/press_releases");
require("./model/token_send");
require("./model/support_chat");
require("./model/blog_category");
require("./model/blog_to_category");
require("./model/banner");
require("./model/user_coin_transaction");
require("./model/career");
require("./model/traders_category");
require("./model/traders_channel");
require("./model/whitelist");
require("./model/profit");
require("./model/video_status");
require("./model/dapps");


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var supportRouter = require('./routes/supportapi');
var careerRouter = require('./routes/careerapi');

var app = express();

app.use(session({ 
	secret: 'somerandonstuffs',
	resave: false,
	saveUninitialized: false,
	cookie: { expires: 6000000 }
}));

app.use(flash());

app.use(cors());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', supportRouter);
app.use('/career', careerRouter);

/* catch 404 and forward to error handler */ 
app.use(function(req, res, next) {
	next(createError(404));
});

/* error handler */ 
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
