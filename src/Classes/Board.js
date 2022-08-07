import NewOrganismPopup from "./NewOrganismPopup";
import Tile from "./Tile";
import Plant from "./plants/Plant";
import generateNewCoordinate from "../functions/generateNewCoordinate";
import checkIfOrganismIsOutsideOfMap from "../functions/checkIfOrganismIsOutsideOfMap";
import Organism from "./Organism";
import Wolf from "./Animal/Wolf";
import Tortoise from "./Animal/Tortoise";
import Sheep from "./Animal/Sheep";
import Fox from "./Animal/Fox";
import Wasp from "./Animal/Wasp";
import Grass from "./plants/Grass";
import HolyOrchid from "./plants/HolyOrchid";
import BloodHerb from "./plants/BloodHerb";
import Mandrake from "./plants/Mandrake";
import Player from "./Animal/Player";
let map = document.querySelector('.map');

export default class Board {
    grid = null;
    player = null;
    constructor() {
        this.initialize();
    }

    createGrid = (m, n) => {
        return [...Array(m)].map((e) => Array(n));
    };

    initialize = () => {
        this.newOrganismPopup = new NewOrganismPopup(this);
        this.grid = this.createGrid(20, 20);
        for (let row = 0; row < this.grid.length; row++) {
            for (let column = 0; column < this.grid[row].length; column++) {
                const tile = new Tile(row, column, this.newOrganismPopup, this);
                this.grid[row][column] = tile;
                map.append(tile.tileElement);
            }
        }
    };
    refresh = () => {
        for (let row = 0; row < this.grid.length; row++) {
            for (let column = 0; column < this.grid[row].length; column++) {
                const tile = this.grid[row][column];
                if (tile.currentOrganism) {
                    const icon = tile.currentOrganism.icon;
                    tile.tileElement.innerHTML = '';
                    tile.tileElement.append(icon);
                }
            }
        }
    };
    setOrganism = (organism) => {
        const tile = this.grid[organism.x][organism.y];
        tile.currentOrganism = organism;
    };

    sortOtherOrganismsForRoundQueue = () => {
        let queueArr = [];
        for (let row = 0; row < this.grid.length; row++) {
            for (let column = 0; column < this.grid[row].length; column++) {
                const tile = this.grid[row][column];
                const organismType = tile.currentOrganism;
                if (organismType) {
                    queueArr.push(organismType);
                }
            }
        }
        return queueArr.sort((a, b) => b.initiative - a.initiative);
    };

    moveOrganismsBeforePlayerMovement = () => {
        const queuedArr = this.sortOtherOrganismsForRoundQueue();
        const queuedArrBeforePlayer = queuedArr.slice(
            0,
            queuedArr.indexOf(this.player),
        );
        this.moveAllOrganisms(queuedArrBeforePlayer);
    };

    moveOrganismsAfterPlayerMovement = () => {
        const queuedArr = this.sortOtherOrganismsForRoundQueue();
        const queuedArrAfterPlayer = queuedArr.slice(
            queuedArr.indexOf(this.player) + 1,
        );
        this.moveAllOrganisms(queuedArrAfterPlayer);
    };

    moveAllOrganisms = (arrOfOrganisms) => {
        arrOfOrganisms.forEach(this.moveOneOrganism);
    };

    moveOneOrganism = (organism) => {
        if (organism instanceof Plant) {
            organism.spread();
            return;
        }
        const currentX = organism.x;
        const currentY = organism.y;
        const currentTile = this.grid[currentX][currentY];
        const changeXBy = generateNewCoordinate(organism);
        const changeYBy = generateNewCoordinate(organism);
        let newX = organism.x + changeXBy;
        let newY = organism.y + changeYBy;
        const checkOrganismCoordinates = checkIfOrganismIsOutsideOfMap(
            newX,
            currentX,
            newY,
            currentY,
        );
        const newTile =
            this.grid[checkOrganismCoordinates.newX][checkOrganismCoordinates.newY];
        if (newTile === currentTile) {
            return;
        }
        organism.interaction(newTile.currentOrganism);
        if (
            currentTile.currentOrganism !== null &&
            newTile.currentOrganism === null
        ) {
            organism.x = checkOrganismCoordinates.newX;
            organism.y = checkOrganismCoordinates.newY;
            currentTile.currentOrganism = null;
            newTile.currentOrganism = organism;
        }
    };

    generateCoordinates = () => {
        return Math.floor(Math.random() * 19);
    };

    randomizeOrganismForNewGame = () => {
        let x = this.generateCoordinates();
        let y = this.generateCoordinates();
        while (this.grid[x][y].currentOrganism instanceof Organism) {
            x = this.generateCoordinates();
            y = this.generateCoordinates();
        }
        const randomNumberToRollOrganism = Math.floor(Math.random() * 9);
        switch (randomNumberToRollOrganism) {
            case 0:
                return new Wolf(this.grid, x, y);
            case 1:
                return new Tortoise(this.grid, x, y);
            case 2:
                return new Sheep(this.grid, x, y);
            case 3:
                return new Fox(this.grid, x, y);
            case 4:
                return new Wasp(this.grid, x, y);
            case 5:
                return new Grass(this.grid, x, y);
            case 6:
                return new HolyOrchid(this.grid, x, y);
            case 7:
                return new BloodHerb(this.grid, x, y);
            case 8:
                return new Mandrake(this.grid, x, y);
        }
    };

    createNewGame = (amountOfOrganisms) => {
        if (amountOfOrganisms > 400) {
            alert('Too many organisms');
            return;
        }
        this.player = new Player(this.grid, this.generateCoordinates(), this.generateCoordinates());
        this.setOrganism(this.player);
        for (let i = 0; i <= amountOfOrganisms; i++) {
            const organism = this.randomizeOrganismForNewGame();
            this.setOrganism(organism);
        }
        this.refresh();
    };

    gameOver = () => {
        this.refresh();
        this.player = null;
        document.removeEventListener('keyup', this.setNewCoordinatesForPlayer);
        setInterval(this.gameAfterPlayerDied, 100);
    };

    gameAfterPlayerDied = () => {
        const queuedArr = this.sortOtherOrganismsForRoundQueue();
        this.moveAllOrganisms(queuedArr);
        this.refresh();
    };

    setNewCoordinatesForPlayer = (e) => {
        const currentX = this.player.x;
        const currentY = this.player.y;
        const tileBeforeMovement = this.grid[currentX][currentY];
        if (tileBeforeMovement.currentOrganism === null) {
            this.gameOver();
            return;
        }
        switch (e.keyCode) {
            case numPad.up:
                this.movePlayer(this.player.x - 1, this.player.y);
                break;
            case numPad.left:
                this.movePlayer(this.player.x, this.player.y - 1);
                break;
            case numPad.down:
                this.movePlayer(this.player.x + 1, this.player.y);
                break;
            case numPad.right:
                this.movePlayer(this.player.x, this.player.y + 1);
                break;
            case numPad.upLeft:
                this.movePlayer(this.player.x - 1, this.player.y - 1);
                break;
            case numPad.upRight:
                this.movePlayer(this.player.x - 1, this.player.y + 1);
                break;
            case numPad.downLeft:
                this.movePlayer(this.player.x + 1, this.player.y - 1);
                break;
            case numPad.downRight:
                this.movePlayer(this.player.x + 1, this.player.y + 1);
                break;
            case numPad.stay:
                this.movePlayer(this.player.x, this.player.y);
                break;
        }
    }
    movePlayer = (newX, newY) => {
        this.moveOrganismsBeforePlayerMovement();
        const currentX = this.player.x;
        const currentY = this.player.y;
        const tileBeforeMovement = this.grid[currentX][currentY];
        const checkOrganismCoordinates = checkIfOrganismIsOutsideOfMap(
            newX,
            currentX,
            newY,
            currentY,
        );
        const newTile =
            this.grid[checkOrganismCoordinates.newX][checkOrganismCoordinates.newY];
        const currentTile = this.grid[currentX][currentY];
        this.player.interaction(newTile.currentOrganism);
        if (
            newTile.currentOrganism === null &&
            currentTile.currentOrganism !== null
        ) {
            this.player.x = checkOrganismCoordinates.newX;
            this.player.y = checkOrganismCoordinates.newY;
            tileBeforeMovement.currentOrganism = null;
            this.setOrganism(this.player);
        }
        this.moveOrganismsAfterPlayerMovement();
        this.refresh();
    }
}
const numPad ={
    up: 104,
    left: 100,
    down: 98,
    right: 102,
    upLeft: 103,
    upRight: 105,
    downLeft: 97,
    downRight: 99,
    stay: 101
}