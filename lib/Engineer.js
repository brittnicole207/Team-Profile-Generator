//Gathers the engineer's information from the user input. 
function Engineer (name, email, id, github) {
    this.name = name; 
    this.email = email; 
    this.id = id; 
    this.github = github;
}; 

//Returns Engineer's name
Engineer.prototype.getName = function() {
    return this.name; 
};

//Returns Engineer's email
Engineer.prototype.getEmail = function() {
    return this.email;
}

//Returns Engineer's ID
Engineer.prototype.getId = function() {
    return this.id;
}

//Returns Engineer's Github
Engineer.prototype.getGithub = function() {
    return this.github;
}

//Returns Engineer's role
Engineer.prototype.getRole = function() {
    return "Engineer"; 
}

//Module exports tell Node.js that this function can be exported so other files can access this code. 
module.exports = Engineer; 