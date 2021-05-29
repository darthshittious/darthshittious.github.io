var flash = true;
function toggleFlash() {
    flash = !flash
    document.getElementById('toggle-button').innerText = flash === true ? 'Flashy colours hurt mine eyes!' : 'Where\'s my cool background?'
}
