let interval
let birthday

// This is used so I can return fake dates for testing purposes :)
function getDate() {
    return new Date()
}

function pluralise(i, name) {
    return i === 1 ? `${i} ${name}` : `${i} ${name}s`  // Units of time used here all have conventional plurals
}

function formatTime(d) {
    const duration = birthday - d.getTime();

    let seconds = parseInt((duration / 1000) % 60),
        minutes = parseInt((duration / (1000 * 60)) % 60),
        hours = parseInt((duration / (1000 * 60 * 60)) % 24),
        days = parseInt(duration / (1000 * 60 * 60 * 24))

    return `${pluralise(days, 'day')}, ${pluralise(hours, 'hour')}, ${pluralise(minutes, 
        'minute')}, and ${pluralise(seconds, 'second')}`
}

function celebrate() {
    document.getElementById('birthday').innerHTML = `IT'S MY BIRTHDAY TODAY! I'M <span>${futureAge}</span> NOW :DDDD`
    confetti({spread: 180, particleCount: 150})
}

function updateTimer(d) {
    document.getElementById('birthday').innerHTML = `I turn <span>${futureAge}</span> in <span>${formatTime(d)}</span>`
}

function tick() {
    const d = getDate()
    if (d.getMonth() === 1 && d.getDate() === 26) {
        clearInterval(interval)
        celebrate()
    } else {
        updateTimer(d)
    }
}

const now = getDate()
const afterBirthday = now.getMonth() > 1 || (now.getMonth() === 1 && now.getDate() > 26)

const futureAge = afterBirthday ? now.getFullYear() - 2000 : now.getFullYear() - 2001

if (now.getMonth() > 1 || (now.getMonth() === 1 && now.getDate() > 26)) {
    birthday = new Date(now.getFullYear() + 1, 1, 26).getTime()
} else {
    birthday = new Date(now.getFullYear(), 1, 26).getTime()
}

window.onload = () => {
    tick(getDate())
    interval = setInterval(tick, 500)
}
