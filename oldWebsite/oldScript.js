//src = "https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"//jquery
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
    let runAgain = true;
    while (runAgain) {
        let a = prompt("Rate this website from 0 to 10 !")
        if (a >= 7 && a <= 10) {
            alert("Thank you, for your feedback.")
        }
        else if (a >= 5 && a < 7) {
            alert("Yea this is bad, I'm tring to improve this.")
        }
        else {
            let lowFeedback = a < 5 ? "Sorry for your dissapointment," : "Invalid feedback,"
            alert(lowFeedback + " I have just started learning.")
        }
        runAgain = confirm("Do you want to submit again!");
    }
}
setTimeout(feedBack, 50000);

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