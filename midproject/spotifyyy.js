function changetext() {
    if (document.getElementById("demo").innerHTML == "Follow") {
        document.getElementById("demo").innerHTML = "Unfollow"
        document.getElementById("demo").style.color = "green";
    } else {
        document.getElementById("demo").innerHTML = "Follow";
        document.getElementById("demo").style.color = "white";
    }
}

let volume = document.getElementById('volume-slider');
volume.addEventListener("change", function(e) {
    song.volume = e.currentTarget.value / 100;
});