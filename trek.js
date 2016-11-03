var navigatePanel;
var coverup;
var panels;
var warp_select;
var course_select;
var messageText;

function init() {
    navigatePanel = document.getElementById("navigate_panel");
    coverup = document.getElementById("coverup");
    panels = [];
    panels.push(navigatePanel);

    warp_select = document.getElementById("warp_speed_select");
    course_select = document.getElementById("course_select");
    messageText = document.getElementById("message_text");
}

var post_result;

function post(address, obj, success_function) {
    var post_result;
    $.ajax({
        type: "POST",
        method: "POST",
        crossDomain: true,
        url: address,
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify(obj),
        success: success_function
    });
}

function startGame() {
    console.log("startGame");
    post("http://localhost:8080/start", {}, function(result) {
        console.log("startGame result:");
        try {
            post_result = JSON.parse(result);
        } catch (err) {
            if (err.name == 'SyntaxError') {
                // just a string return from server
                post_result = result
            } else {
                post_result = " ";
            }
        }
        console.log(post_result);
        messageText.innerHTML = post_result.message;
    });
}


function toggleNavigate() {
    navigatePanel.style.display = "block";
    coverup.style.display = "block";
}

function hidePanels() {
    //console.log("hidePanels");
    coverup.style.display = "none";
    for (i in panels) {
        panels[i].style.display = "none";
    }
}

var course_selected;
var speed_selected;

function navigate() {
    course_selected = course_select.value;
    speed_selected = warp_select.value;
    console.log("navigate - course:" + course_selected + " and speed:" + speed_selected);
    post("http://localhost:8080/nav", {
        "course": parseInt(course_selected),
        "speed": parseInt(speed_selected)
    }, function(result) {
        hidePanels();
        console.log("navigate result:");
        if (typeof result == 'string') {
            post_result = JSON.parse(result);
        } else {
            post_result = result;
        }
        messageText.innerHTML = post_result.message;

        console.log(post_result);
    });
}
