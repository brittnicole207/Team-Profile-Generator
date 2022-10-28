//Gathers the name, email, and id of the employee entered 
function Employee (name, email, id) {
    this.name = name; 
    this.email = email; 
    this.id = id; 
};

//Returns employee's name
Employee.prototype.getName = function() {
    return this.name; 
}; 

//Returns employee's email
Employee.prototype.getEmail = function () {
    return this.email;
};

//Returns employee's ID
Employee.prototype.getID = function() {
    return this.id; 
}; 

//Returns employee's role
Employee.prototype.getRole = function() {
    return "Employee";  
};

//Module exports tell Node.js that this function can be exported so other files can access this code. 
module.exports = Employee;
