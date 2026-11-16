// Music

const music = document.getElementById("birthdayMusic");

const musicButton = document.getElementById("musicButton");


// Music button manually

musicButton.addEventListener("click", function () {


    if (music.paused) {


        music.play();


        musicButton.innerHTML = "🔊 Playing Music";


    } else {


        music.pause();


        musicButton.innerHTML = "🎵 Play Music";


    }


});







// First surprise button


const openButton = document.getElementById("openButton");

const messageSection = document.getElementById("message");



openButton.addEventListener("click", function () {


    // Show birthday letter

    messageSection.style.display = "block";



    messageSection.scrollIntoView({

        behavior: "smooth"

    });





    // Start music automatically

    music.play()

    .then(function(){


        musicButton.innerHTML = "🔊 Playing Music";


    })

    .catch(function(){


        console.log("Browser blocked autoplay");


    });



});









// Final surprise button


const surpriseButton =
document.getElementById("surpriseButton");


const surpriseMessage =
document.getElementById("surprise-message");




surpriseButton.addEventListener("click", function () {



    // Show final message

    surpriseMessage.style.display = "block";



    surpriseMessage.scrollIntoView({

        behavior:"smooth"

    });




    // Fireworks blast

    for(let i = 0; i < 120; i++){


        createFirework();


    }



});








// Fireworks effect


function createFirework(){



    const spark = document.createElement("div");


    const effects = [

        "✨",

        "🎆",

        "💖",

        "⭐"

    ];



    spark.innerHTML =

    effects[Math.floor(Math.random()*effects.length)];



    spark.style.position="fixed";


    spark.style.left="50%";


    spark.style.top="50%";


    spark.style.fontSize="30px";


    spark.style.zIndex="9999";


    spark.style.pointerEvents="none";



    document.body.appendChild(spark);





    const x =
    (Math.random()-0.5)*900;



    const y =
    (Math.random()-0.5)*900;





    spark.animate(


        [


            {

                transform:"translate(0,0) scale(1)",

                opacity:1

            },


            {

                transform:
                `translate(${x}px,${y}px) scale(2)`,

                opacity:0

            }


        ],


        {


            duration:1600,


            easing:"ease-out"


        }


    );





    setTimeout(function(){


        spark.remove();


    },1600);



}









// Floating hearts


const heartsContainer =
document.getElementById("hearts-container");



const hearts = [

    "💖",

    "💙",

    "🌸",

    "✨",

    "💗"

];




for(let i = 0; i < 25; i++){



    const heart =
    document.createElement("div");



    heart.className="heart";



    heart.innerHTML =

    hearts[Math.floor(Math.random()*hearts.length)];



    heart.style.left =

    Math.random()*100 + "vw";



    heart.style.animationDuration =

    (5 + Math.random()*6) + "s";



    heart.style.animationDelay =

    Math.random()*5 + "s";



    heartsContainer.appendChild(heart);



}