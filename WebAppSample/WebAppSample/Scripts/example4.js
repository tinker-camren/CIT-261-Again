function onTouchExample() {
    element = document.getElementById("OnTouchExampleDiv");
    element.addEventListener("touchend", function () {
        element.classList.toggle("JsCssExampleAnimation"), false;
    });
    element.addEventListener("touchstart", function () {
        element.classList.toggle("JsCssExampleTransition"), false;
    });

}

function onLoadExample() {
    element = document.getElementById("OnLoadExample");
    element.innerHTML = "<p>This paragraph was inserted by the onLoad JavaScript Event</p>";
}

function animationEventExample() {
    element = document.getElementById("OnTouchExampleDiv");
    element.addEventListener("animationstart", function () {
        alert("You've triggered an animation after clicking the magic button! Congratulations!"), false;
    });    
}