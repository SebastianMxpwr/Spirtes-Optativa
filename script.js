const canvas = document.getElementById('canvas1')
const stageOfAnimation = document.getElementById('stageOfAnimation')
const ctx = canvas.getContext('2d')
const CANVAS_WIDHT = canvas.width = 600
const CANVAS_HEIGHT = canvas.height = 600
const spriteWidth = 575
const spriteHeight = 523
let frameX = 0
let frameY = 0
let step = 6
let gameFrame = 0;
const staggerFrames = 5;
const stageOfAnimations= ["Animacion: idle", 'Animacion: jump', 'Animacion: fall', 'Animacion: run', 'Animacion: dizzy', 'Animacion: sit', 'Animacion: roll', 'Animacion: bite', 'Animacion: ko','Animacion: gethit' ] 


const player = new Image()
player.src = 'shadow_dog.png'




window.addEventListener("keydown", (e) => {
    
    //Al precionar flecha arriba se mueve nuetr juagar hacia arriba
    if(e.key === "w"){
        frameY++
        if(frameY > 8) frameY = 9
        stageOfAnimation.innerHTML = stageOfAnimations[frameY]
    }else if(e.key === "s"){
        frameY--
        if(frameY < 1) frameY = 0
        stageOfAnimation.innerHTML = stageOfAnimations[frameY]
    }

    if(frameY == 0) step = 6
    else if(frameY == 1) step = 6
    else if(frameY == 2) step = 6
    else if(frameY == 3) step = 8
    else if(frameY == 4) step = 10
    else if(frameY == 5) step = 4
    else if(frameY == 6) step = 6
    else if(frameY == 7) step = 6
    else if(frameY == 8) step = 11
    else if(frameY == 9) step = 3

    console.log(step);
  });


function animate(){
    ctx.clearRect(0,0, CANVAS_WIDHT, CANVAS_HEIGHT)
        ctx.drawImage(player, frameX*spriteWidth, frameY*spriteHeight, 
        spriteWidth, spriteHeight, 
        0,0, spriteWidth,spriteHeight)
        
        
        if(gameFrame % staggerFrames == 0){
            if(frameX< step){
                frameX++
            } 
            else frameX = 0
        }
        gameFrame++
        
        requestAnimationFrame(animate)
}

animate()



