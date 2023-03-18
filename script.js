function oldWeb() {
    location.href = 'oldWebsite/oldWebsite.html'
}
function weatherSite() {
    location.href = 'https://sankhadip-roy.github.io/WeatherSite/'
}
function startIdea() {
    window.open('files/teamOnestepBusinessIdea.pptx', '_self');
}

document.addEventListener('DOMContentLoaded', () => {
    // By default, submit button is disabled
    document.querySelector('#submit').disabled = true;

    document.querySelector('#form1').onkeyup = () => {
        if (document.querySelector('#exampleFormControlInput1').value.length > 0 || document.querySelector('#exampleFormControlTextarea1').value.length > 0) {

            document.querySelector('#submit').disabled = false;
        }
        else {
            document.querySelector('#submit').disabled = true;
        }
    }

    document.querySelector('#form1').onsubmit = function () {
        const email = document.querySelector('#exampleFormControlInput1').value;
        const suggestionOn = document.querySelector('#exampleFormControlSelect1').value;
        const suggestion = document.querySelector('#exampleFormControlTextarea1').value;
        alert(`Your Feedback:\nEmail: ${email}\n` + `Suggesion on: ${suggestionOn}\n` + `Suggesion: ${suggestion}`);
    }

})