"use strict";

var fs = require("fs");

var fileContent = fs.readFileSync("./js/Employee.js", "utf8");

fs.writeFile("sample.js", fileContent.trim(), function (error) {
    if (error) {
        throw error;
    } else {
        console.log("file created");
    }
});

if (fs.existsSync("lib")) {
    console.log("Directory exists");
} else {
    fs.mkdir("lib", function (error) {
        if (error) {
            throw error;
        }
        console.log("directory created");
    });
}