var body = document.getElementById('game');
var mainWrap = document.getElementById('game-wrapper')

// Game wrapper
var gameWrap = document.createElement('div');
gameWrap.style.width = '840px';
gameWrap.style.height = '650px';
gameWrap.style.position = 'relative';
gameWrap.style.background = "url('./background.png')";
gameWrap.style.backgorundRepeat = 'repeat-y';
gameWrap.style.overflow = 'hidden';
mainWrap.appendChild(gameWrap);