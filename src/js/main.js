//var first = "Emily";
//var last = "Shih";

//Get
//let button = document.querySelector("button");
//function logname() {
//  console.log(first + " " + last);
//}
//function addparagraph() {
//document.body.innerHTML +=
  //  "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>";
//}
//hobbies = ["running", "writing", "listening to podcasts"];
//console.log(hobbies);

//Behavior

//Wire
//button.addEventListener("click", logname);
//button.addEventListener("click", addparagraph);

console.log("Hello");

//Make two variables called first and last, 
//then log them out together as your name.
//1. make the first variable
let first ="Emily";
//2. Make the second variable
let last ="Shih";

//3. Log them out, but there needs to be a space between.
console.log(first+ " " +last);

//Get Behavior Wire-It-Up

//Log that same thing out, whenever a person clicks a button on the page. connect the HTML to the javascript
// make a variable for the button. you tell it a CSS selector, and it defines the first element on the page and gives it back to you. so we store it in a varibale called "button".
var button = document.querySelector("button");

//Define a Function
function logName(){
  console.log(first+ " " +last);
}
button.addEventListener("click", logName);

function appendName(){
  //Create p element
let p = document.createElement("p"); 
console.log(p);


  // Put text inside the p element
  p.innerText = first+ " " +last;

  //Append the p element as a child of the page's body; take the paragraph and add it to the bottom of the page. 
document.body.appendChild(p);

}
//Whenever someone clicks the button, add a paragraph to the page that has your name
// Attach function to click on button
button.addEventListener("click", appendName);

//Make an array of your three favorite hobbies
let hobbies = ["running", "writing", "listening to podcasts"];

let ul = document.createElement("ul");

//Loop through the array and log each item using console.log(). this is the for loop. i is the countervariable. at the end of the loops, we make i goes up by 1 until it no longer meets the condition. 
for (let i = 0; i < hobbies.length; i++) {
//running is index 0, writing is index 1, listening to podcasts is index 2
  let li = document.createElement("li");
  li.innerText = hobbies[i];
  ul.appendChild(li);
}

//the looping allows us to go through each list item and do the same thing for each of them. 

document.body.appendChild(ul);

//hobbies.forEach((hobby)) => {}

//Loop through the array and log each item using console.log()
