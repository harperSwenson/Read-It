var express = require('express');
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var path = require('path');
app.get('/', (req, res) => res.sendFile('index.html', {root: __dirname}));
var port = process.env.PORT || 3000;
app.listen(port);
app.use(express.static('public'));

var passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  User.findById(id, function(err, user) {
    cb(err, user);
  });
});

var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@readit-rflqw.mongodb.net/test?retryWrites=true&w=majority');

var schema = mongoose.Schema;
var credents = new schema({
    username: String,
    password: String
    });
var users = mongoose.model('userInfo', credents, 'userInfo');

var localstrat = require('passport-local').Strategy;

passport.use(new localstrat(
    function(username, password, done){
        users.findOne({ username: username }, function(err, user){
            if(err){return done(err);}
            if(!user){
                return done(null, false, { message: 'Incorrect username.' });
            }
            if(user.password != password){
                return done(null, false, { message: 'Incorrect password.'})
            }
            return done(null, user);
        });
    }
));

app.get('/', function(req, res){
  res.status(200);
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/login', function(req,res){
  res.status(200);
  res.sendFile(path.join(__dirname + '/login.html'));
});

app.get('/menu', function(req,res){
  res.status(200);
  res.sendFile(path.join(__dirname + '/menu.html'));
});

app.post('/login',
         passport.authenticate('local', { successRedirect: '/',
                                            failureRedirect: '/login',
                                            failureFlash: true })
);

