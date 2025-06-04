let arr=document.querySelectorAll("button");
    document.addEventListener("keydown",function(e){
        addAnimation(e.key);
        switch(e.key){
            case "w":
                let audio=new Audio("./sounds/tom-1.mp3");
                audio.play();
                break;
            case "a":
                let audio2=new Audio("./sounds/tom-2.mp3");
                audio2.play();
                break;
            case "s":
                let audio3=new Audio("./sounds/tom-3.mp3");
                audio3.play();
                break;
            case "d":
                let audio4=new Audio("./sounds/tom-4.mp3");
                audio4.play();
                break;
            case "j":
                let audio5=new Audio("./sounds/crash.mp3");
                audio5.play();
                break;
            case "k":
                let audio6=new Audio("./sounds/kick-bass.mp3");
                audio6.play();
                break;
            case "l":
                let audio7=new Audio("./sounds/snare.mp3");
                audio7.play();
                break;
        }
    })
    function addAnimation(changedkey){
        let key=document.querySelector(`.${changedkey}`);
        key.classList.add("pressed");
        setTimeout(function () {
            key.classList.remove("pressed");
        }, 100);
    }