let mainWrap = document.getElementById('game-container');
let gameWrap = document.createElement('div');
mainWrap.appendChild(gameWrap);
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


let resetButton = document.createElement('button');
resetButton.innerHTML = 'RESTART';
resetButton.onclick = function () {
    window.location.reload();
};
mainWrap.appendChild(resetButton);


// YELLOW CAR
const y_image = document.getElementById('yellow-car');

const y_car1 = {
    w: 50,
    h: 90,
    x: 150,
    y: -20,
    size: 20,
    dx: 5,
    dy: 2.2
}

function drawYellowCar() {
    ctx.drawImage(y_image, y_car1.x, y_car1.y, y_car1.w, y_car1.h)
}
// END OF YELLOW CAR


// RED CAR
const r_image = document.getElementById('red-car');

const r_car1 = {
    w: 50,
    h: 90,
    x: 220,
    y: -20,
    size: 20,
    dx: 5,
    dy: 3
}

function drawRedCar() {
    ctx.drawImage(r_image, r_car1.x, r_car1.y, r_car1.w, r_car1.h)
}
// END OF RED CAR

// BLUE CAR
const b_image = document.getElementById('blue-car');

const b_car1 = {
    w: 50,
    h: 90,
    x: 290,
    y: -20,
    size: 20,
    dx: 5,
    dy: 4
}

function drawBlueCar() {
    ctx.drawImage(b_image, b_car1.x, b_car1.y, b_car1.w, b_car1.h)
}
// END OF BLUE CAR


// GREEN CAR
const g_image = document.getElementById('green-car');

const g_car1 = {
    w: 50,
    h: 90,
    x: 520,
    y: -95,
    size: 20,
    dx: 5,
    dy: 5
}

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
    dy: 4
}

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
    dy: 4.4
}

function drawTruck2() {
    ctx.drawImage(t_image, truck2.x, truck2.y, truck2.w, truck2.h)
}
// END OF TRUCK2





const p_image = document.getElementById('player');

const player = {
    w: 40,
    h: 80,
    x: 360,
    y: 550,
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
    if(player.x < 0 ){
        player.x = 0;
    }

    if ((player.x + player.w) > canvas.width){
        player.x = canvas.width - player.w;
    }
}

function newPos(){
    player.x += player.dx;
    player.y += player.dy;

    edgeStop();
}

function update(){
    clear();

    drawPlayer();
    drawTruck1();
    drawTruck2();
    drawBlueCar();
    drawGreenCar();
    drawRedCar();
    drawYellowCar();

    newPos();

    //YELLOW CAR MOVEMENT
    y_car1.y += y_car1.dy;

    if (y_car1.y + y_car1.size > canvas.height) {
        y_car1.y = -90;
    }
    //END YELLOW CAR MOVEMENT

    //RED CAR MOVEMENT
    r_car1.y += r_car1.dy;

    if (r_car1.y + r_car1.size > canvas.height) {
        r_car1.y = -90;
    }
    //END RED CAR MOVEMENT

    //GREEN CAR MOVEMENT
    g_car1.y += g_car1.dy;

    if (g_car1.y + g_car1.size > canvas.height) {
        g_car1.y = -90;
    }
    //END GREEN CAR MOVEMENT

    //BLUE CAR MOVEMENT
    b_car1.y += b_car1.dy;

    if (b_car1.y + b_car1.size > canvas.height) {
        b_car1.y = -90;
    }
    //END BLUE CAR MOVEMENT

    //TRUCK1 MOVEMENT
    truck1.y += truck1.dy;

    if(truck1.y + truck1.size > canvas.height){
        truck1.y = -200;
    }
    //END TRUCK1 MOVEMENT

    //TRUCK2 MOVEMENT
    truck2.y += truck2.dy;

    if (truck2.y + truck2.size > canvas.height) {
        truck2.y = -200;
    }
    //END TRUCK2 MOVEMENT

    requestAnimationFrame(update);
}

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

update();
document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);