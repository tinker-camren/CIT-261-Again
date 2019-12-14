function appendChildExample() {
    element = document.getElementById('DomManipExampleDiv');    
    var button = document.createElement('button');
    button.className = "btn-info row mx-auto";
    button.innerHTML = "Insert Before Example";
    button.onclick = function insertBeforeExample() {
        var button2 = document.createElement('button');
        button2.className = "btn-info row mx-auto";
        button2.innerHTML = "Remove Child Example";
        button2.onclick = function removeChildExample() {
            element.removeChild(button2);
        }
        element.insertBefore(button2, button);        
    }
    element.appendChild(button);
}

function HtmlCanvasExample() {
    element = document.getElementById('CanvasExample');
    context = element.getContext("2d");
    var pos, vel;
    pos = {
        x: 10,
        y: 10
    };
    vel = {
        x: 1,
        y: 1
    };

    var loop = function () {
        context.clearRect(0, 0, element.width, element.height);
        pos.x += vel.x;
        pos.y += vel.y;
        if (pos.x < 5 || pos.x > element.width - 5) {
            vel.x *= -1;
        }
        if (pos.y < 5 || pos.y > element.height - 5) {
            vel.y *= -1;
        }
        context.fillRect(pos.x - 5, pos.y - 5, 10, 10);
    };

    setInterval(loop, 1000 / 60);
}

function JsCssExample() {    
    element = document.getElementById("JsCssExampleDiv");
    element.addEventListener("click", function () {
        element.classList.toggle("JsCssExampleAnimation");
    });
    element.addEventListener("mouseover", function () {
        element.classList.toggle("JsCssExampleTransition");
    });
    
}