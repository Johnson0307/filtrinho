function preload() 
{
    img = loadImage('Lewandowski.webp');
}

function setup() 
{
 canvas = createCanvas(400, 400)
 canvas.center()
    color = ''
}

function draw() 
{
    image(img, 0, 0, 511, 720)
    tint(color)
}

function filtertint()
{
    color = document.getElementById('color').value
    console.log(color)
}

function takeSnapshot()
{
    save('foto.png')
}