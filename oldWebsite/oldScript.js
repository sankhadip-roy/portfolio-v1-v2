// function showAlert(msg, ok) {
//     var confirmBox = $("#confirm");
//     confirmBox.find(".message").text(msg);
//     confirmBox.find(".ok").unbind().click(function () {
//         confirmBox.hide();
//     });
//     confirmBox.find(".ok").click(ok);
//     confirmBox.show();
// }

function feedBack() {
    // let runAgain = true;
    // while (runAgain) {
    let a = prompt("Rate this website from 0 to 10 !")
    let heading = document.querySelector('h1');
    if (a >= 7 && a <= 10) {
        alert(`Thanks ! it's ${a}`)
        heading.innerHTML = `Thanks ! it's ${a}`;
    }
    else if (a >= 5 && a < 7) {
        alert("Yea this is bad, I'm tring to improve this.")
        heading.innerHTML = "Yea this is bad";
    }
    else {
        let lowFeedback = a < 5 ? "Sorry for your dissapointment !" : "Invalid feedback !"
        alert(lowFeedback + " I have just started learning.")
        heading.innerHTML = lowFeedback;
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