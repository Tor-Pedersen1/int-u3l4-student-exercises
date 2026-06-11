let header = document.querySelector("h1");
let button = document.querySelector("button");
let img = document.querySelector("img");

// 1. Press the button on the webpage to change it up! Take notice of what happens.
// - What do you think innerHTML does?
// - What do you think .src does?


// 2. Try the following:
// - Make it so that the header says your name when the button is clicked.
// - Change the src of the image to something random.
button.addEventListener("click", function() {
    header.innerHTML = "🤯 TOR!!";
    img.src = "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2R2aTJqY2ZzcXM5cW9sZW1pZmh6NDk2NnE3d2FheDdheWVnNWR1NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1L5YuA6wpKkNO/giphy.gif";
});


