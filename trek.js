var navigatePanel;
var coverup;
var panels;
var warp_select;
var course_select;

function init() {
    navigatePanel = document.getElementById("navigate_panel");
    coverup = document.getElementById("coverup");
    panels = [];
    panels.push(navigatePanel);

    warp_select = document.getElementById("warp_speed_select");
    course_select = document.getElementById("course_select");

    myCanvas();

}



function myCanvas() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var width = 50;
    var height = 50;
    // ctx.fillRect(100, 10, 150, 80);

    var starImg = new Image();
    starImg.src = "images/power.png";
    var starbaseImg = new Image();
    starbaseImg.src = "images/starbase1.png";
    var klingonImg = new Image();
    klingonImg.src = "images/klingon.png";
    var img = new Image();
    img.src = "images/enterprise1.png";

    starImg.onload = function() {
        ctx.drawImage(starImg, 90, 10, width, height);
        ctx.drawImage(starImg, 20, 70, width, height);
    }
    starbaseImg.onload = function() {
        ctx.drawImage(starbaseImg, 200, 40, width - 10, height - 10);
    }
    klingonImg.onload = function() {
        ctx.drawImage(klingonImg, 140, 100, width, height);
    }
    img.onload = function() {
        ctx.drawImage(img, 10, 10, width, height);
    }

}

function startGame() {
    console.log("startGame");

}

function hidePanels() {
    console.log("hidePanels");
    coverup.style.display = "none";
    for (i in panels) {
        panels[i].style.display = "none";
    }
}

function toggleNavigate() {
    console.log(navigatePanel);
    // if (navigatePanel.style.display == "none") {
    navigatePanel.style.display = "block";
    coverup.style.display = "block";
    // } else {
    // navigatePanel.style.display = "none";
    // coverup.style.display = "none";
    // }
}

function sendNavigation() {
    var course_selected = course_select.value;
    var speed_selected = warp_select.value;
    console.log("course " + course_selected);
    console.log("speed " + speed_selected);
    hidePanels();

}
