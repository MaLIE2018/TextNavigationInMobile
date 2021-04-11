function startup() {
    let el = document.querySelector('.btn-floating')
    el.addEventListener("touchstart", handleStart, false);
    // el.addEventListener("touchend", handleEnd, false);
    // el.addEventListener("touchcancel", handleCancel, false);
    // el.addEventListener("touchmove", handleMove, false);
}


document.addEventListener("DOMContentLoaded", startup);

var ongoingTouches = [];


function handleStart(evt) {
    evt.preventDefault();
    document.querySelector('#navbar-floating').classList.toggle("d-none")
    console.log("touchstart.");
}