//Gathers the name, email, id, and school of the Intern entered. 
function Intern (name, email, id, school) {
    this.name = name; 
    this.email = email;
    this.id = id;
    this.school = school; 
};

//Returns Intern's name
Intern.prototype.getName = function() {
    return this.name;
};

//Returns Intern's email
Intern.prototype.getEmail = function() {
    return this.email;
};

//Returns Intern's ID
Intern.prototype.getId = function() {
    return this.id;
}

//Returns Intern's school
Intern.prototype.getSchool = function () {
    return this.school;
}

//Returns Intern's role
Intern.prototype.getRole = function() {
    return "Intern";
}

//Module exports tell Node.js that this function can be exported so other files can access this code. 
module.exports = Intern; 