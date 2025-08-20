//objects

let username  = {
    firstname :"Smita", 
    isloggedin: true,
};

console.log((username.firstname));
console.log(typeof(username));

username.firstname = "Ms. Smita";
console.log((username.firstname));


const usernameConst  = {
    firstname :"Smita", 
    isloggedin: true,
};

usernameConst.lastname = "shinde";

console.log((usernameConst.firstname));
console.log(typeof(usernameConst));

usernameConst.firstname = "Ms. Smita";
console.log((usernameConst.firstname));
console.log((usernameConst.lastname));

let today = new Date();
console.log(today);
