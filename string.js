var firstname = prompt("What is your FirstName? ");
var LastName = prompt("Enter your your LastName? ");
var fullname = firstname + " " + LastName;
document.write(`Welcome  ${fullname} <br>`);

//point 2
var user = prompt("Enter your favourite mobile phone model?");
document.write("My favourite Mobile is " + user + "<br>");
document.write("String length is " + user.length + "<br>");

//point 3
var string = "pakistani";
var string1 = string.indexOf("n");
document.write("The index of letter 'n' is " + string1 + "<br>");

//point 4
var last = "Hello World ";
last1 = last.lastIndexOf("l");
document.write("The last  index of letter 'l' is " + last1 + "<br>");

//point 5
var pak = "pakistani";
document.write("The Third character is  " + pak.charAt(2) + "<br>");

//point 6
document.write("Welcome " + fullname + "<br>");

//point 7
var city = "Hyderabad";
var rep = city.replace("Hyder", "Islam");
document.write("city" + city + "<br>");
document.write("Replace city " + rep + "<br>");

//point 8
var message = "Ali and Sami are best friends. They play cricket and football together.";
var message1 = message.replaceAll("and", "&");
document.write("Replacing all 'and' into '&' " + message1 + "<br>");

//point 9

var value = 472;
document.write("This is a String " + value + "<br>");
var num = Number(value);
document.write("This is a Number " + num + "<br>");

//point 10

var abc = prompt("Enter any letter");
var conversion = abc.toUpperCase();
document.write("All letters are in upper case " + conversion + "<br>");
// point 11

 document.write("<h1>TITLED CASE</h1>");

 var userInput = prompt("Enter a sentence:");
 var capitalizedInput = userInput.charAt(0).toUpperCase()+ userInput.slice(1).toLowerCase() ;
 document.write(`User Input: ${userInput}<br>`);

 document.write(`Upper Case: ${capitalizedInput} <br>`);

//point 12
var number = 35.36 ;
var string = number.toString();
var numstr = string.replace(".", "");
document.write("Number to String " + numstr +"<br>");

//point 13

var username = prompt("Enter a username");
var isValid = true; 

for (var i = 0; i < username.length; i++) {
    var charCode = username.charCodeAt(i); 
    if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
        isValid = false; 
        break; 
    }
}


if (!isValid) {
    document.write("This is an Invalid Username.");
} else {
    document.write("Username is Valid: " + username);
}


//point 14

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Enter the item you want to search for:");
var input = userInput.toLowerCase();
var found = "";
for (var i = 0; i < A.length; i++) {
    if (A[i].toLowerCase() === input) {
        found = true;
        break;
    }
}
if (found) {
    alert("The item is found in the list.");
}
else {
    alert("The item is not found in the list.");
}

//point 15
var password = prompt("Enter a password.");
function validation() {
    if (password.length !== 6) {
        alert("Please enter only six characters."); 
        return false; 
    }
    
    if (!isNaN(password[0])) {
        alert("The first character must be a letter.");
        return false;      }

    var letter = false;
    var number = false;

    for (var i = 0; i < password.length; i++) {
        if (isNaN(password[i])) {
            letter = true; 
        } else {
            number = true;  
        }
    }

    if (!letter) {
        alert("Password must contain at least one letter.");
        return false; 
    }

    if (!number) {
        alert("Password must contain at least one number.");
        return false;  
    }

    alert("Password is valid.");
    return true; 
}



while (!validation()) {
    password = prompt("Try again. Enter a valid password:");
}

//point 16
var name = "University; of; karachi;"
var split = name.split("");
console.log(split);


//point 17
var user = prompt("Enter a text");
var lastCharacter = user[user.length - 1];
alert("The last character is: " + lastCharacter);


//point 18

var text = "The quick brown fox jumps over the lazy dog"; 
text = text.toLowerCase();
var wordToCount = "the"; 
var count = 0;
var words = text.split(" ");
for (var i = 0; i < words.length; i++) { 
    if (words[i] === wordToCount) { 
        count++;}
}
alert("The word 'the' occurs " + count + " times.");
