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
    myCanvas();

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
