let body = document.getElementById('game');
let mainWrap = document.getElementById('game-container')
let gameWrap = document.createElement('div');
mainWrap.appendChild(gameWrap);


var resetButton = document.createElement('button');
resetButton.innerHTML = 'RESET';
resetButton.onclick = function () {
    window.location.reload();
};
mainWrap.appendChild(resetButton);

function Player(posx) {
    this.x = posx; 
    this.y = 550;
    let that = this;

    this.createBike = function () {
        var player = document.createElement('div');
        player.style.width = '120px';
        player.style.height = '200px';
        player.style.position = 'absolute';
        player.style.left = this.x + 'px';
        player.style.top = this.y + 'px';
        player.style.background = "url('./player.jpg')";
        player.style.backgroundPosition = '0px 0px';
        mainWrap.appendChild(player);
        return player;
    }

    this.element = this.createBike();

    this.updatePositionX = function (offset) {
        this.x += offset;
        this.element.style.left = this.x + 'px';
    }

    this.str = function () {
        return this.posx;
    }
}

var car1 = new Player(185)
