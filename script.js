//Select HTML/DOM elements
let imageInput = document.querySelector("#imageLinkInput")
let topTextInput = document.querySelector("#topTextInput")
let bottomTextInput = document.querySelector("#bottomTextInput")
let bigDiv = document.querySelector("#memes")
let submit = document.querySelector("#submit")
let image

//Listen for submission and call function to generate the meme
submit.addEventListener("click", function (e) {
    image = new Image()
    image.src = imageInput.value
    image.addEventListener("load", function (e) {
        generateMeme(image)
    })
})

//function to draw the meme and size the canvas
function generateMeme(image) {
    let canvas = document.createElement("canvas")
    let ctx = canvas.getContext("2d");
    let newDiv = document.createElement("div");
    newDiv.setAttribute("id", "finsihedMemeDiv")
    bigDiv.appendChild(newDiv)
    let width = image.width;
    let height = image.height;
    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(image, 0, 0);

    let fontSize = Math.floor(width / 8);
    let yOffset = Math.floor(height / 25);

    //set text styling
    ctx.strokeStyle = 'black';
    ctx.lineWidth = (fontSize / 16);
    ctx.fillStyle = 'white';
    ctx.textAlign = "center";
    ctx.lineJoin = "round";
    ctx.font = `${fontSize}px sans-serif`;

    //add text to image
    ctx.textBaseline = "top";
    ctx.strokeText(topTextInput.value, width / 2, yOffset);
    ctx.textBaseline = "bottom";
    ctx.strokeText(bottomTextInput.value, width / 2, height - yOffset);

    //add canvas to the DIV
    newDiv.appendChild(canvas)
}



//listen for click on meme to delete
let memeSpace = document.querySelector("#memes")
memeSpace.addEventListener("click", function (e) {
    e.target.remove()
})