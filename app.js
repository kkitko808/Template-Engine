const inquirer = require("inquirer")
const Employee = require("./lib/Employee")
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")
const Engineer = require("./lib/Engineer")
const fs = require("fs")

inquirer
    .prompt([
        {
            name: "name",
            type: "input",
            message: "What is the name of the Employee?"
        },
        {
            name: "id",
            type: "input",
            message: "What is the Employee's ID"
        },
        {
            name: "email",
            type: "input",
            message: "What is the Employee's email"
        },
        {
            name: "title",
            type: "list",
            choices: [Manager, Intern, Engineer]
        }
    ])
    .then(response => {

        let empName = response.name;
        let empId = response.id;
        let empEmail = response.email;
        let empTitle = response.title;

        fs.readFile("templates/engineer.html", 'utf8', (err, data) => {
            if (err) throw err;
            data = data.replace("{ name }", empName)
            data = data.replace("{ id }", empId)
            data = data.replace("{ email }", empEmail)
            data = data.replace("{ title }", empTitle)
            let userTemplate = data;
            fs.readFile("output/index.html", 'utf8', (err, data) => {
                if (err) throw err;
                data = data.replace("{{teammember0}}", userTemplate)
                fs.writeFile("output/changed.html", data, "utf8", (err) => {
                    if (err) throw err;
                    console.log("output has been updated!")
                })
            })
        }

        )
    });