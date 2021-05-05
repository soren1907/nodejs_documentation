const express = require("express");
const app = express();

// Makes public a static folder.
// It will make the resources inside the folder available for the HTML-files
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/html/index.html")
});

app.get("/tools", (req, res) => {
    res.sendFile(__dirname + "/public/html/tools.html")
});

app.get("/terminalcommands", (req, res) => {
    res.sendFile(__dirname + "/public/html/terminal_commands.html")
});

app.get("/codesnippets", (req, res) => {
    res.sendFile(__dirname + "/public/html/code_snippets.html")
});

app.get("/theory", (req, res) => {
    res.sendFile(__dirname + "/public/html/theory.html")
});

// Can decide own port, or use 8080 as default 
const port = process.env.PORT || 8080;

app.listen(port, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("server is running on port", port)
});