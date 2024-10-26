var user = +prompt(" Write a positive integer");
if (isNaN(user) || user <= 0) {
    alert("plz enter a number");
}
else{
document.write("Number " + user +"<br>");}

var user1 = Math.round(user);
document.write("Rounded " + user1+"<br>");

var user2 = Math.ceil(user);
document.write("Ceil " + user2+"<br>");

var user3 = Math.floor(user);
document.write("Floor " + user3+"<br>");


//point 2

var neg = +prompt("Write a negative floating point");
if (isNaN(neg) || neg >= 0) {
    alert("Please enter a valid negative floating point number.");
} else{
    document.write("Number " + neg + "<br>");

    var neg1 = Math.round(neg);
    document.write("Rounded " + neg1 + "<br>");

    var neg2 = Math.ceil(neg);
    document.write("Ceil " + neg2 + "<br>");

    var neg3 = Math.floor(neg);
    document.write("Floor " + neg3 + "<br>");
}


// point 3

var num = +prompt("Enter a number")
var num1 = Math.abs(num);
document.write("Absolute value of " + num + " is " + num1 + "<br>");

//point 4

var diceValue = Math.floor(Math.random() * 9 )+1;// 1 means dice start form 1 not 0
document.write("Random Dice Value is : "+diceValue);


//point 5

var toss = Math.random();
if (toss<0.5){
    document.write("Coin toss result: Heads");
} else {
    document.write("Coin toss result: Tails");
}


//point 6
var program = Math.floor(Math.random()*100)+1;
if (program >= 0 || program <= 100){

    document.write("Random Number between 1 to 100: " + program);

}


//point 7
var weight = parseFloat(prompt("What is your Weight?"));

if (!isNaN(weight)) {
    document.write("Your weight is: " + weight + " kg/kilogram");
} else {
    document.write("Please enter a valid weight.");
}


//point 8

var random = Math.floor(Math.random()*10)+1;
var input = +prompt("Write a number between 1 to 10");
if (input===random)
{
    document.write("CONGRATULATIONS!");
}
else{
    document.write("SORRY! Better Luck For Next Time..");
}