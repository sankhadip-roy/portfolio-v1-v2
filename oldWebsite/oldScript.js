// function showAlert(msg, ok) {
//     var confirmBox = $("#confirm");
//     confirmBox.find(".message").text(msg);
//     confirmBox.find(".ok").unbind().click(function () {
//         confirmBox.hide();
//     });
//     confirmBox.find(".ok").click(ok);
//     confirmBox.show();
// }

let heading = document.querySelector('h1');
let string;
function feedBack() {
    // let runAgain = true;
    // while (runAgain) {
    let a = prompt("Rate this website from 0 to 10 !")
    if (a >= 7 && a <= 10) {
        string = `Thanks ! it's ${a}`;
        alert(string);
    }
    else if (a >= 5 && a < 7) {
        alert("Yea this is bad, I'm tring to improve this.")
        string = "Yea this is bad";

    }
    else {
        let lowFeedback = a < 5 ? "Sorry for your dissapointment !" : "Invalid feedback !"
        alert(lowFeedback + " I have just started learning.")
        string = lowFeedback;
    }
    //     runAgain = confirm("Do you want to submit again!");
    // }
}
setTimeout(feedBack, 50000);

function mode() {
    if (document.body.style.color === "green") {
        document.body.style.color = "white";
        document.querySelector('#footerId').style.color = button.dataset.color;

    }
    else {
        document.body.style.color = "green"
    }
}
document.querySelector('button').onclick = mode;

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('button').forEach(button => {
        button.onclick = function () {
            document.querySelector('#hello').style.color = button.dataset.color;
        }
    })
})

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('select').onchange = function () {
        document.querySelector('#hello').style.color = this.value;
    }
})

if (!localStorage.getItem('counter')) {
    localStorage.setItem('counter', 0);
}
let counter = localStorage.getItem('counter');
function count() {
    counter++;
    document.querySelector('#hello').innerHTML = `
                <p>I'm <b>Sankhadip roy</b>, majoring in CSE. This is my
                    first webdev project. Now I'm just using html, css & js and some bootstrap. Now this is hosted on github pages. I am not updating info on this site anymore. I'm now using this site for testing CSS and Js. Evaluate this site and
                    give me some suggesion. <caption><u><big><strong>Watchtime: ${Math.trunc(counter / 60)}:${counter % 60} min</strong></big></u></caption></p>`;
    localStorage.setItem('counter', counter);
}
function changeHello() {
    if (counter % 10 != 0 || string == undefined) {
        heading.innerHTML = `Sankhaip Roy`;
    }
    else {
        heading.innerHTML = `${string}`;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    setInterval(changeHello, 1000);
    setInterval(count, 1000);
})

document.addEventListener('DOMContentLoaded', () => {
    $("#showAlert").click(function () {
        Swal.fire(
            "If mobile device: use a Desktop (This website isn't optimized)",
        )
    })
});

//Node.js
// const os = require('os');
// function osValue() {
//     alert(os.freemem())
//     alert(os.platform())
//     alert(os.release())
//     alert(os.version())
//     alert(os.type())
//     alert(os.networkInterfaces())
//     alert(os.uptime())
// }
// setTimeout(osValue, 10);