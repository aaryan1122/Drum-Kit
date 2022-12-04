for (let i = 0; i < document.querySelectorAll("button").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var inner=this.innerHTML
        sound(inner)
        time(inner)

    })
}
document.addEventListener("keydown",function(e){
    sound(e.key)
    time(e.key)
})
function sound(key) {
    switch (key) {
        case "w":
            let t1 = new Audio("sounds/tom-1.mp3")
            t1.play()
            break;
        case "a":
            let t2 = new Audio("sounds/tom-2.mp3")
            t2.play()
            break;
        case "s":
            let t3 = new Audio("sounds/tom-3.mp3")
            t3.play()
            break;
        case "d":
            let t4 = new Audio("sounds/tom-4.mp3")
            t4.play()
            break;
        case "j":
            let cr = new Audio("sounds/crash.mp3")
            cr.play()
            break;
        case "k":
            let k = new Audio("sounds/kick-bass.mp3")
            k.play()
            break;
        case "l":
            let sn = new Audio("sounds/snare.mp3")
            sn.play()
            break;
        default:
            break;
}}
function time(current) {
    document.querySelector("."+current).classList.add("pressed")
    setTimeout(function () {
        document.querySelector("."+current).classList.remove("pressed")
    },250)
}
