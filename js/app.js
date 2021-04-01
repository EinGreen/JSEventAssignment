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

function reactToKeyPress(eventDetails) {
    console.log(eventDetails);
    document.body.style.background = "skyblue";
    document.getElementById(`lolNo`).innerText = `lol jk, it's now blue`
}

document.body.addEventListener("keydown", reactToKeyPress);