class Engineer {
    constructor(name, email, id, github) {
        this.github = github;
        this.name = name;
        this.email = email;
        this.id = id;
        this.role = "Engineer";
    }
    getRole() {
        return this.role
    }
    getGithub() {
        return this.github
    }
}
module.exports = Engineer;