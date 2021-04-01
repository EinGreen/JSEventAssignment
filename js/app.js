// these are global scoped variables, anyone can use this
var defaultnum = 0;

// this function turns the background a shade green because why not?
function clickThis(eventDetails) {
    console.log(eventDetails);
    document.body.style.background = "lime";
    whyThis.removeEventListener("click", clickThis);
}

// this block of code makes it so when people click the "click me" box, the function above happens 
let whyThis = document.getElementById(`why`);
whyThis.addEventListener("click", clickThis);

// this block of useless code increases the number within another box over and over again
function incrementNumber(eventDetails) {
    console.log(eventDetails);
    defaultnum++;
    document.getElementById("counter").innerText = defaultnum;
}

// this block of code makes it so the useless code above gets activated
let hoverThisIdiot = document.getElementById(`hoverThis`);
hoverThisIdiot.addEventListener(`mousemove`, incrementNumber);

// this funciton is a troll funciton that tells the user it will change the background color to white
// spoiler alert: it doesn't do that! It changes it to poop
function reactToKeyPress(eventDetails) {
    console.log(eventDetails);
    document.body.style.background = "rgb(96, 68, 7)";
    document.getElementById(`lolNo`).innerText = `lol jk, it's now it's poop`
}

// this function happen when you press the Spacebar [technically true]
document.body.addEventListener("keydown", reactToKeyPress);