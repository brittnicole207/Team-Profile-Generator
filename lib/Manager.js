//Gathers the name, email, id, and school of the manager entered.
function Manager(name, email, id, officeNumber) {
  this.name = name;
  this.email = email;
  this.id = id;
  this.officeNumber = officeNumber;
}

//Returns managers name
Manager.prototype.getName = function () {
  return this.name;
};

//Returns manager's email
Manager.prototype.getEmail = function () {
  return this.email;
};

//Returns manager's id
Manager.prototype.getId = function () {
  return this.id;
};

//Returns manager's office number
Manager.prototype.getOfficeNumber = function () {
  return this.officeNumber;
};

//Returns manager's role
Manager.prototype.getRole = function () {
  return "Manager";
};

//Module exports tell Node.js that this function can be exported so other files can access this code.
module.exports = Manager;
