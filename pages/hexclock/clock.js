function pad(n) {
    // Zero fill to 2 digits.
    return ("0" + n).slice(-2)
}

function getTime(hex) {
    var now = new Date()

    var hour = pad(now.getHours())
    var minute = pad(now.getMinutes())
    var second = pad(now.getSeconds())

    if (hex == "hex") {
        return hour.toString() + minute.toString() + second.toString()
    } else {
        return hour + ":" + minute + ":" + second
    }
}

document.addEventListener("DOMContentLoaded", function (event) {
    var bg = document.getElementById("bg")
    var time = document.getElementById("time")
    var timetext = document.getElementById("timetext")
    var metaThemeColour = document.querySelector("meta[name=theme-color]")

    function timeInHex() {
        gettime = "#" + getTime("hex")  // Lazy HEX maker

        bg.style.backgroundColor = gettime  // Website background
        time.innerHTML = gettime  // Upper time
        timetext.innerHTML = getTime()  // Bottom text
        metaThemeColour.setAttribute("content", gettime)  // Change theme for phones
        document.title = "HEX Clock - " + gettime  // Website title

        setTimeout(timeInHex, 50)  // Repeat every 0.05 seconds (20Hz)
    }

    timeInHex()
})