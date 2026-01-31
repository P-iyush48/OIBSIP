const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// Session setup
app.use(session({
    secret: "supersecretkey",
    resave: false,
    saveUninitialized: true
}));

// In-memory user storage (for demo purposes)
const users = {};

// Routes
app.get("/", (req, res) => {
    res.render("home");
});

app.get("/register", (req, res) => {
    res.render("register");
});

app.post("/register", async (req, res) => {
    const { username, password } = req.body;
    if (users[username]) {
        return res.render("userAlreadyExists");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    users[username] = hashedPassword;
    res.redirect("/login");
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const userPassword = users[username];
    if (userPassword && await bcrypt.compare(password, userPassword)) {
        req.session.user = username;
        res.redirect("/secure");
    } else {
        res.send("Invalid credentials!");
    }
});

app.get("/secure", (req, res) => {
    if (req.session.user) {
        res.render("secure", { user: req.session.user });
    } else {
        res.redirect("/login");
    }
});

app.get("/logout", (req, res) => {
    req.session.destroy();
    res.redirect("/");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});