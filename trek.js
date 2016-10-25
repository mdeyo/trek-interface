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
