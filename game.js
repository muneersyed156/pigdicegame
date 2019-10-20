var song = document.getElementById("song")
var applause = document.getElementById("applause")
var roll = document.getElementById("roll")
var dice = document.getElementById("dice")
var player1 = document.getElementById("player1")
var player2 = document.getElementById("player2")
var hold = document.getElementById("hold")
var ts1 = document.getElementById("totalplayer1score")
var ts2 = document.getElementById("totalplayer2score")
var p1s = document.getElementById("player1score")
var p2s = document.getElementById("player2score")
var c1 = document.getElementById("circle1")
var c2 = document.getElementById("circle2")
var p1 = 1
var p2 = 0
//song.play()
player1.style.color = "black"
player2.style.color = "grey"
ts1.style.color = "black"
ts2.style.color = "grey"
c2.style.display = "none"
c1.style.display = "block"
roll.addEventListener("click", function () {
    var r = (Math.floor(Math.random() * (6 - 1) + 1) + 1)
    dice.src = "./" + r.toString() + ".png"
    var a = (Math.floor(Math.random() * (90 - 0) + 0) + 0) - 0
    dice.style.transform = `rotate(${a}deg)`
    if (r == 4 && (p1 == 1 && p2 == 0)) {
        p1 = 0
        p2 = 1
        player2.style.color = "black"
        ts2.style.color = "black"
        c1.style.display = "none"
        c2.style.display = "block"
        player1.style.color = "grey"
        ts1.style.color = "grey"
        p2s.innerHTML = 0
        p1s.innerHTML = 0
    }
    else if (r == 4 && (p1 == 0 && p2 == 1)) {
        p1 = 1
        p2 = 0
        player1.style.color = "black"
        player2.style.color = "grey"
        c2.style.display = "none"
        c1.style.display = "block"
        p1s.innerHTML = 0
        p2s.innerHTML = 0
        ts1.style.color = "black"
        ts2.style.color = "grey"
    }
    else if (p1 == 1) {
        var t = parseInt(p1s.innerHTML)
        if (r + t >= 50) {
            player1.innerHTML = "WINNER !"
        }
        p1s.innerHTML = r + t
    }
    else if (p2 == 1) {
        var t = parseInt(p2s.innerHTML)
        if (r + t >= 50) {
            player2.innerHTML = "WINNER !"
            player2.style.color = "red"
        }
        p2s.innerHTML = r + t
    }
})

hold.addEventListener("click", function () {
    if (p1 == 1) {
        var s = parseInt(p1s.innerHTML)
        var s2 = parseInt(ts1.innerHTML)
        ts1.innerHTML = s + s2
        p1s.innerHTML = 0
        p1 = 0
        p2 = 1
        player2.style.color = "black"
        c1.style.display = "none"
        c2.style.display = "block"
        player1.style.color = "grey"
        ts2.style.color = "black"
        ts1.style.color = "grey"
    }
    else if (p2 == 1) {
        var s = parseInt(p2s.innerHTML)
        var s2 = parseInt(ts2.innerHTML)
        ts2.innerHTML = s + s2
        p2s.innerHTML = 0
        p1 = 1
        p2 = 0
        player1.style.color = "black"
        player2.style.color = "grey"
        c2.style.display = "none"
        c1.style.display = "block"
        p1s.innerHTML = 0
        ts1.style.color = "black"
        ts2.style.color = "grey"
    }
    if (parseInt(ts1.innerHTML) >= 50) {
        player1.innerHTML = "WINNER !"
        player1.style.color = "red"
        player2.style.color = "grey"
        ts1.style.color = "red"
        ts2.style.color = "grey"
        p1 = 0
        p2 = 0
        roll.style.cursor = "not-allowed"
        confetti.start();
        song.pause()
        applause.play()
    }
    if (parseInt(ts2.innerHTML) >= 50) {
        player2.innerHTML = "WINNER !"
        player2.style.color = "red"
        player1.style.color = "grey"
        ts2.style.color = "red"
        ts1.style.color = "grey"
        p1 = 0
        p2 = 0
        roll.style.cursor = "not-allowed"
        confetti.start();
        song.pause()
        applause.play()
    }
})

document.getElementById("new").addEventListener("click", function () {
    window.location.reload()
    confetti.stop();
})

