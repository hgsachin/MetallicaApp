const path = require('path');
const { Server } = require('http');
const Express = require('express');
const passport = require('passport');
const cookieSession = require('cookie-session');

const passportSetup = require('./config/passport-setup');
const keys = require('./config/keys');

const app = new Express();
const server = new Server(app);

app.use(Express.static(path.join(__dirname, '../')));
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey],
    httpOnly: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.get('/login', passport.authenticate('google', {
    scope: ['profile']
}));

app.get('/auth/google/redirect', passport.authenticate('google'), (req, res) => {
    res.redirect('/');
});

const port = process.env.PORT || 8080;

server.listen(port, (err) => {
    if (err) {
        return console.error(err);
    }
    console.info(`Server running on Port : ${port}`);
});