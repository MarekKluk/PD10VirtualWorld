export default class Controls {
    constructor(onMove, player) {
        this.upLeftButton = document.querySelector('.up-left-button');
        this.upButton = document.querySelector('.up-button');
        this.upRightButton = document.querySelector('.up-right-button');
        this.leftButton = document.querySelector('.left-button');
        this.stayButton = document.querySelector('.stay-button');
        this.rightButton = document.querySelector('.right-button');
        this.downLeftButton = document.querySelector('.down-left-button');
        this.downButton = document.querySelector('.down-button');
        this.downRightButton = document.querySelector('.down-right-button');
        this.upLeftButton.addEventListener('click', () => {
            onMove(player.x - 1, player.y - 1);
        });
        this.upButton.addEventListener('click', () => {
            onMove(player.x - 1, player.y);
        });
        this.upRightButton.addEventListener('click', () => {
            onMove(player.x - 1, player.y + 1);
        });
        this.leftButton.addEventListener('click', () => {
            onMove(player.x, player.y - 1);
        });
        this.stayButton.addEventListener('click', () => {
            onMove(player.x, player.y);
        });
        this.rightButton.addEventListener('click', () => {
            onMove(player.x, player.y + 1);
        });
        this.downLeftButton.addEventListener('click', () => {
            onMove(player.x + 1, player.y - 1);
        });
        this.downButton.addEventListener('click', () => {
            onMove(player.x + 1, player.y);
        });
        this.downRightButton.addEventListener('click', () => {
            onMove(player.x + 1, player.y + 1);
        });
    }
}