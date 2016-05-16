/*
  Your 3 Users will be the following.
    0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
    1) Cahlan, cahlan@devmounta.in, 'iLoveHashtags'
    2) Lenny, lenny@theLenster.com, 'iLoveLentilSoup'
*/

var User = function(name, email, pw){
  this.name = name;
  this.email = email;
  this.pw = pw;
};

//Create an Array called 'users' that will store all our instances of User.

var users = [];


//Now create and push into your users array 3 separate instances of User using the data from above in that exact order

var Tyler = new User('Tyler', 'tylermcginnis33@gmail.com', 'iLoveJS');
var Cahlan = new User('Cahlan', 'cahlan@devmounta.in', 'iLoveHashtags');
var Lenny = new User('Lenny', 'lenny@theLenster.com', 'iLoveLentilSoup');
users.push(Tyler);
users.push(Cahlan);
users.push(Lenny);
//Console.log all of Tylers information
console.log('Tyler\'s information is ' + "Name: " + Tyler.name + " " + "Email: " + Tyler.email + " " + "Password: " + Tyler.pw);



//Now console.log all of Lennys information
console.log('Tyler\'s information is ' + "Name: " + Lenny.name + " " + "Email: " + Lenny.email + " " + "Password: " + Lenny.pw);

  //code here


//Now create another instance of User using your own information and then add that to your users array.

var me = new User('Josh', 'Joshbarber17@Me.com', 'meaghan17');
users.push(me)
;

//Now loop through your users Array and console.log every users name.

console.log('All my users names are ' + Tyler.name + ', ' + Cahlan.name + ", " + Lenny.name + ", " + me.name + ".");
  //code here
