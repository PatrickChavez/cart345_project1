// Clicking on an element will change its style
// Code help: 
// Matthias
// https://stackoverflow.com/questions/11722400/programmatically-change-the-src-of-an-img-tag
// 
// Harshit Rastogi
// https://stackoverflow.com/questions/69295203/getting-src-attribute-of-clicked-image-using-getelementsbyclassname
// 
// Anudeep Bulla
// https://stackoverflow.com/questions/19655189/javascript-click-event-listener-on-class
// 
// W3Schools
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_state_if_else2

// Giving instructions
alert("Click on an object to change it!");

// The object variables
let misterB = document.getElementById("misterB");
let boat = document.getElementById("boat");
let sun = document.getElementById("sun");
let water = document.getElementById("water");
let clouds = document.getElementsByClassName("clouds");

// The sound variables
let pageMusic = new Audio("../assets/sounds/GB-RPG-B03-1(OP2).mp3");
// The pageMusic properties
pageMusic.loop = true;

let waterSFX = new Audio("../assets/sounds/maou_se_8bit28.wav");
// Adjusting volume
waterSFX.volume = 0.2;
let boatSFX = new Audio("../assets/sounds/se_powerup_001.wav");
// Adjusting volume
boatSFX.volume = 0.4;
let mrBSFX = new Audio("../assets/sounds/se_jump_002.wav");
// Adjusting volume
mrBSFX.volume = 0.3;
let sunSFX = new Audio("../assets/sounds/se_etc_001.wav");
// Adjusting volume
sunSFX.volume = 0.4;
let cloudsSFX = new Audio("../assets/sounds/se_jump_004.wav");
// Adjusting volume
cloudsSFX.volume = 0.4;

// The music buttons
let musicButton = document.getElementById("musicButton");
let stopButton = document.getElementById("stopButton");


// Clicking an object changes its appearance and plays a sound effect
function changeMisterB() {
    if (misterB.src.match("../assets/images/MrB/MrB_2.gif")) {
        misterB.src = "../assets/images/MrB/MrBNew1.gif";
        console.log("Change!");
        mrBSFX.play();
    }
    else if (misterB.src.match("../assets/images/MrB/MrBNew1.gif")) {
        misterB.src = "../assets/images/MrB/MrB_2.gif";
        console.log("Changed!");
        mrBSFX.play();
    }
}

function changeBoat() {
    if (boat.src.match("../assets/images/Boat.png")) {
        boat.src = "../assets/images/Squid.png";
        console.log("Change!");
        boatSFX.play();
    }
    else if (boat.src.match("../assets/images/Squid.png")) {
        boat.src = "../assets/images/Boat.png";
        console.log("Changed!");
        boatSFX.play();
    }
}

function changeSun() {
    if (sun.src.match("../assets/images/Sun/Sun1.gif")) {
        sun.src = "../assets/images/Moon/Moon1.gif";
        console.log("Change!");
        sunSFX.play();
    }
    else if (sun.src.match("../assets/images/Moon/Moon1.gif")) {
        sun.src = "../assets/images/Sun/Sun1.gif";
        console.log("Changed!");
        sunSFX.play();
    }
}

function changeWater() {
    if (water.src.match("../assets/images/Water1.gif")) {
        water.src = "../assets/images/SideWater1.gif";
        console.log("Change!");
        waterSFX.play();
    }
    else if (water.src.match("../assets/images/SideWater1.gif")) {
        water.src = "../assets/images/Water1.gif";
        console.log("Changed!");
        waterSFX.play();
    }
}

function changeClouds() {
    // Using "this" to target the image
    if (this.src.match("../assets/images/Cloud/Cloud_1.gif")) {
        this.src = "../assets/images/Seagull/Seagull1.gif";
        console.log("Change!");
        cloudsSFX.play();
    }
    else if (this.src.match("../assets/images/Seagull/Seagull1.gif")) {
        this.src = "../assets/images/Cloud/Cloud_1.gif";
        console.log("Changed!");
        cloudsSFX.play();
    }
}

// The music button adds background music
function playMusic() {
    pageMusic.play();
    // The music will always start at the beginning
    pageMusic.currentTime = 0;
}

// The stop button stops the background music
function stopMusic() {
    pageMusic.pause();
}

// Adding the event listeners
misterB.addEventListener("click", changeMisterB);
boat.addEventListener("click", changeBoat);
sun.addEventListener("click", changeSun);
water.addEventListener("click", changeWater);
// Creating a for loop for the clouds
for (var i = 0; i < clouds.length; i++) {
    clouds[i].addEventListener("click", changeClouds);
}

musicButton.addEventListener("click", playMusic);
stopButton.addEventListener("click", stopMusic);







