
let mainWrap = document.getElementById('game-container');
let gameWrap = document.createElement('div');
mainWrap.appendChild(gameWrap);
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


let resetButton = document.createElement('button');
resetButton.className = "restart";
resetButton.innerHTML = 'RESTART';
resetButton.onclick = function () {
    window.location.reload();
};
mainWrap.appendChild(resetButton);



// BUSH
const bush_image = document.getElementById('bush');

const bush0 = {
    w: 50,
    h: 50,
    x: 50,
    y: 0,
    size: 20,
    dx: 5,
    dy: 11.00
}

const bush1 = {
    w: 50,
    h: 50,
    x: 50,
    y: 75,
    size: 20,
    dx: 5,
    dy: 11.00
}

const bush2 = {
    w: 50,
    h: 50,
    x: 50,
    y: 150,
    size: 20,
    dx: 5,
    dy: 11.00
}

const bush3 = {
    w: 50,
    h: 50,
    x: 50,
    y: 250,
    size: 20,
    dx: 5,
    dy: 11.00
}

const bush4 = {
    w: 50,
    h: 50,
    x: 50,
    y: 350,
    size: 20,
    dx: 5,
    dy: 11.00
}

const bush5 = {
    w: 50,
    h: 50,
    x: 50,
    y: 450,
    size: 20,
    dx: 5,
    dy: 11.00
}

const bush6 = {
    w: 50,
    h: 50,
    x: 50,
    y: 550,
    size: 20,
    dx: 5,
    dy: 11.00
}

const bush7 = {
    w: 50,
    h: 50,
    x: 50,
    y: 650,
    size: 20,
    dx: 5,
    dy: 11.00
}

function drawBush() {
    ctx.drawImage(bush_image, bush0.x, bush0.y, bush0.w, bush0.h)
    ctx.drawImage(bush_image, bush1.x, bush1.y, bush1.w, bush1.h)
    ctx.drawImage(bush_image, bush2.x, bush2.y, bush2.w, bush2.h)
    ctx.drawImage(bush_image, bush3.x, bush3.y, bush3.w, bush3.h)
    ctx.drawImage(bush_image, bush4.x, bush4.y, bush4.w, bush4.h)
    ctx.drawImage(bush_image, bush5.x, bush5.y, bush5.w, bush5.h)
    ctx.drawImage(bush_image, bush6.x, bush6.y, bush6.w, bush6.h)
    ctx.drawImage(bush_image, bush7.x, bush7.y, bush7.w, bush7.h)
    ctx.drawImage(bush_image, bush1.x + 650, bush1.y, bush1.w, bush1.h)
    ctx.drawImage(bush_image, bush2.x + 650, bush2.y, bush2.w, bush2.h)
    ctx.drawImage(bush_image, bush3.x + 650, bush3.y, bush3.w, bush3.h)
    ctx.drawImage(bush_image, bush4.x + 650, bush4.y, bush4.w, bush4.h)
    ctx.drawImage(bush_image, bush5.x + 650, bush5.y, bush5.w, bush5.h)
    ctx.drawImage(bush_image, bush6.x + 650, bush6.y, bush6.w, bush6.h)
    ctx.drawImage(bush_image, bush7.x + 650, bush7.y, bush7.w, bush7.h)
}
// END OF BUSH


let allCars = [];

// YELLOW CAR
const y_image = document.getElementById('yellow-car');

const y_car1 = {
    w: 50,
    h: 90,
    x: 150,
    y: -20,
    size: 20,
    dx: 5,
    dy: 3.25
}

allCars.push(y_car1)

function drawYellowCar() {
    ctx.drawImage(y_image, y_car1.x, y_car1.y, y_car1.w, y_car1.h)
}
// END OF YELLOW CAR


// YELLOW CAR2
const y_image2 = document.getElementById('yellow-car');

const y_car2 = {
    w: 50,
    h: 90,
    x: 520,
    y: -250,
    size: 20,
    dx: 5,
    dy: 4.30
}

allCars.push(y_car2)

function drawYellow2Car() {
    ctx.drawImage(y_image2, y_car2.x, y_car2.y, y_car2.w, y_car2.h)
}
// END OF YELLOW CAR2

// BLUE CAR2
const b_image3 = document.getElementById('blue-car');

const b_car2 = {
    w: 50,
    h: 90,
    x: 150,
    y: -430,
    size: 20,
    dx: 5,
    dy: 3.20
}


allCars.push(b_car2)

function drawBlueCar2() {
    ctx.drawImage(b_image3, b_car2.x, b_car2.y, b_car2.w, b_car2.h)
}
// END OF BLUE CAR2



// RED CAR
const r_image = document.getElementById('red-car');

const r_car1 = {
    w: 50,
    h: 90,
    x: 220,
    y: -60,
    size: 20,
    dx: 5,
    dy: 3.55
}

allCars.push(r_car1)

function drawRedCar() {
    ctx.drawImage(r_image, r_car1.x, r_car1.y, r_car1.w, r_car1.h)
}
// END OF RED CAR

// RED CAR2
const r_image2 = document.getElementById('red-car');

const r_car2 = {
    w: 50,
    h: 90,
    x: 360,
    y: -415,
    size: 20,
    dx: 5,
    dy: 4.20
}

allCars.push(r_car2)

function drawRedCar2() {
    ctx.drawImage(r_image2, r_car2.x, r_car2.y, r_car2.w, r_car2.h)
}
// END OF RED CAR2

// BLUE CAR
const b_image = document.getElementById('blue-car');

const b_car1 = {
    w: 50,
    h: 90,
    x: 290,
    y: -20,
    size: 20,
    dx: 5,
    dy: 3.94
}

allCars.push(b_car1)

function drawBlueCar() {
    ctx.drawImage(b_image, b_car1.x, b_car1.y, b_car1.w, b_car1.h)
}
// END OF BLUE CAR

// GREEN CAR 2
const b_image2 = document.getElementById('green-car');

const g_car2 = {
    w: 50,
    h: 90,
    x: 290,
    y: -460,
    size: 20,
    dx: 5,
    dy: 4.00
}
allCars.push(g_car2)

function drawGreenCar2() {
    ctx.drawImage(b_image2, g_car2.x, g_car2.y, g_car2.w, g_car2.h)
}
// END OF GREEN CAR 2


// GREEN CAR
const g_image = document.getElementById('green-car');

const g_car1 = {
    w: 50,
    h: 90,
    x: 520,
    y: -95,
    size: 20,
    dx: 5,
    dy: 4.40
}
allCars.push(g_car1)

function drawGreenCar() {
    ctx.drawImage(g_image, g_car1.x, g_car1.y, g_car1.w, g_car1.h)
}
// END OF GREEN CAR




// TRUCK
const t_image = document.getElementById('truck');

const truck1 = {
    w: 70,
    h: 200,
    x: 420,
    y: 0,
    size: 20,
    dx: 5,
    dy: 4.40
}

allCars.push(truck1)

function drawTruck1() {
    ctx.drawImage(t_image, truck1.x, truck1.y, truck1.w, truck1.h)
}
// END OF TRUCK

// TRUCK2
const t_image1 = document.getElementById('truck');

const truck2 = {
    w: 70,
    h: 200,
    x: 600,
    y: -400,
    size: 20,
    dx: 5,
    dy: 4.40
}

allCars.push(truck2)

function drawTruck2() {
    ctx.drawImage(t_image1, truck2.x, truck2.y, truck2.w, truck2.h)
}
// END OF TRUCK2

// TRUCK
const t_image3 = document.getElementById('truck');

const truck3 = {
    w: 70,
    h: 200,
    x: 600,
    y: -820,
    size: 20,
    dx: 5,
    dy: 4.40
}

allCars.push(truck3)

function drawTruck3() {
    ctx.drawImage(t_image3, truck3.x, truck3.y, truck3.w, truck3.h)
}
// END OF TRUCK2



//PLAYER
const p_image = document.getElementById('player');

const player = {
    w: 40,
    h: 80,
    x: 360,
    y: 530,
    speed: 5,
    dx: 0,
    dy: 0,
}

function drawPlayer(){
    ctx.drawImage(p_image, player.x, player.y, player.w, player.h);
}

function clear(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function edgeStop(){
    if(player.x < 125 ){
        player.x = 125;
    }

    if ((player.x + player.w) > canvas.width - 165){
        player.x = canvas.width - player.w - 165;
    }
}

let endOfGame = false

setInterval(function () {
    let score = document.createElement('div');
    score.className = 'score';
    score.innerHTML = `Points  :   ${scoreVal}`;
    mainWrap.appendChild(score);
    if (endOfGame === false){
    scoreVal += 1
    }
    // console.log(scoreVal)
}, 300)

function newPos(){
    player.x += player.dx;
    player.y += player.dy;

    edgeStop();
}

let scoreVal = 0;


// END OF PLAYER

function update(){
    clear();

    drawBush();
    drawPlayer();
    drawTruck1();
    drawTruck2();
    drawTruck3();
    drawBlueCar();
    drawBlueCar2();
    drawGreenCar2();
    drawGreenCar();
    drawRedCar();
    drawRedCar2();
    drawYellowCar();
    drawYellow2Car();

    newPos();

    //BUSH MOVEMENT
    bush0.y += bush0.dy;
    if (bush0.y + bush0.size > canvas.height) {
        bush0.y = -90;
        bush0.dy += 0.02;
    }

    bush1.y += bush1.dy;
    if (bush1.y + bush1.size > canvas.height) {
        bush1.y = -90;
        bush1.dy += 0.02;
    }

    bush2.y += bush2.dy;
    if (bush2.y + bush2.size > canvas.height) {
        bush2.y = -90;
        bush2.dy += 0.02;
    }

    bush3.y += bush3.dy;
    if (bush3.y + bush3.size > canvas.height) {
        bush3.y = -90;
        bush3.dy += 0.02;
    }

    bush4.y += bush4.dy;
    if (bush4.y + bush4.size > canvas.height) {
        bush4.y = -90;
        bush4.dy += 0.02;
    }

    bush5.y += bush5.dy;
    if (bush5.y + bush5.size > canvas.height) {
        bush5.y = -90;
        bush5.dy += 0.02;
    }

    bush6.y += bush6.dy;
    if (bush6.y + bush6.size > canvas.height) {
        bush6.y = -90;
        bush6.dy += 0.02;
    }

    bush7.y += bush7.dy;
    if (bush7.y + bush7.size > canvas.height) {
        bush7.y = -90;
        bush7.dy += 0.05;
    }
    //END BUSH MOVEMENT

    //YELLOW CAR MOVEMENT
    y_car1.y += y_car1.dy;

    if (y_car1.y + y_car1.size > canvas.height) {
        y_car1.y = -90;
        y_car1.dy += 0.02;
    }
    //END YELLOW CAR MOVEMENT

    //BLUE CAR2 MOVEMENT
    b_car2.y += b_car2.dy;

    if (b_car2.y + b_car2.size > canvas.height) {
        b_car2.y = -90;
        b_car2.dy += 0.02;
    }
    //END BLUE CAR2 MOVEMENT

    //YELLOW CAR MOVEMENT
    y_car2.y += y_car2.dy;

    if (y_car2.y + y_car2.size > canvas.height) {
        y_car2.y = -90;
        y_car2.dy += 0.02;
    }
    //END YELLOW CAR MOVEMENT

    //RED CAR MOVEMENT
    r_car1.y += r_car1.dy;

    if (r_car1.y + r_car1.size > canvas.height) {
        r_car1.y = -90;
        r_car1.dy += 0.02;
    }
    //END RED CAR MOVEMENT

    //RED CAR2 MOVEMENT
    r_car2.y += r_car2.dy;

    if (r_car2.y + r_car2.size > canvas.height) {
        r_car2.y = -90;
        r_car2.dy += 0.02;
    }
    //END RED CAR 2MOVEMENT

    //GREEN CAR1 MOVEMENT
    g_car2.y += g_car2.dy;

    if (g_car2.y + g_car2.size > canvas.height) {
        g_car2.y = -90;
        g_car2.dy += 0.02;
    }
    //END GREEN CAR 1 MOVEMENT

    //GREEN CAR2 MOVEMENT
    g_car1.y += g_car1.dy;

    if (g_car1.y + g_car1.size > canvas.height) {
        g_car1.y = -90;
        g_car1.dy += 0.02;
    }
    //END GREEN CAR2 MOVEMENT

    //BLUE CAR MOVEMENT
    b_car1.y += b_car1.dy;

    if (b_car1.y + b_car1.size > canvas.height) {
        b_car1.y = -90;
        b_car1.dy += 0.02;
    }
    //END BLUE CAR MOVEMENT


    //TRUCK1 MOVEMENT
    truck1.y += truck1.dy;

    if(truck1.y + truck1.size > canvas.height){
        truck1.y = -200;
        truck1.dy += 0.02;
    }
    //END TRUCK1 MOVEMENT

    //TRUCK2 MOVEMENT
    truck2.y += truck2.dy;

    if (truck2.y + truck2.size > canvas.height) {
        truck2.y = -200;
        truck2.dy += 0.02;

    }
    //END TRUCK2 MOVEMENT

    //TRUCK3 MOVEMENT
    truck3.y += truck3.dy;

    if (truck3.y + truck3.size > canvas.height) {
        truck3.y = -200;
        truck3.dy += 0.02;
    }
    //END TRUCK3 MOVEMENT

    // if(SHOW_ENTITY_BOUNDS){
    //     ctx.strokeStyle = 'lime';
    //     ctx.beginPath();
    //     ctx.rect(player.x, player.y, player.w, player.h);
    //     ctx.stroke();
    //     ctx.rect(y_car1.x, y_car1.y, y_car1.w, y_car1.h);
    //     ctx.stroke();
    //     ctx.rect(b_car2.x, b_car2.y, b_car2.w, b_car2.h);
    //     ctx.stroke();
    // }

    //SCORE
    // let score = document.createElement('div');
    // score.className = 'score';
    // let scoreVal = 0;
    // score.innerHTML = `Points  :   ${scoreVal}`;
    // mainWrap.appendChild(score);
    // score.innerHTML += `    ${scoreVal}`;
    //END OF SCORE

    

    

    // setTimeout(function(){
    //     scoreVal += 1
    //     // console.log(scoreVal)
    // }, 500)
    
    // function updateScore(){
    //     setTimeout(function () {
    //         scoreVal += 1
    //         // console.log(scoreVal)
    //     }, 500);
    //     score.innerHTML += `    ${scoreVal}`;
    // }

    // updateScore();
    collision();
    requestAnimationFrame(update);
};

function moveRight(){
    player.dx = player.speed;
}

function moveLeft(){
    player.dx = -player.speed;
}

function keyDown(e){
    if (e.key === 'ArrowRight' || e.key === 'Right'){
        moveRight();
    } else if (e.key === 'ArrowLeft' || e.key === 'Left'){
        moveLeft();
    }
}

function keyUp(e){
    if (
        e.key === 'Right' || e.key === 'ArrowRight' || e.key === 'Left' || e.key === 'ArrowLeft'
    ){
        player.dx = 0;
    }
}

function collision() {
    // debugger
    // if (
    //     y_car1.y >= 530 &&
    //     y_car1.x < player.x + player.w &&
    //     y_car1.x + y_car1.w > player.x
    //     // y_car1.x <= player.x
    // ) {
    //     // debugger
    //     console.log("HIT");
    // }

    for(let i=0; i < allCars.length; i++){
        if (
            (allCars[i].y > 600
                || allCars[i].y >= 535 - allCars[i].h
                ) && 
            allCars[i].x < player.x + player.w - 5 && 
            allCars[i].x + allCars[i].w - 8 > player.x){

            // GAME OVER
            let gameOver = document.createElement('div');
            gameOver.className = "game-over";
            mainWrap.appendChild(gameOver);
            // gameOver.appendChild(resetButton);
            gameOver.innerHTML = `Game Over. Click Restart to try again.`;
            endOfGame = true
            //END GAME OVER

            let gameOver2 = document.createElement('div');
            gameOver2.className = "game-over-2";
            mainWrap.appendChild(gameOver2);
            gameOver2.innerHTML = `Your score :    ${scoreVal}`;


            window.location.freeze();
            // console.log("HIT");
        }
    }
}



update();
// console.log(allCars)
// collision();
document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);