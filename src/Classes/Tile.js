import Wolf from "./Animal/Wolf";
import Tortoise from "./Animal/Tortoise";
import Sheep from "./Animal/Sheep";
import Fox from "./Animal/Fox";
import Wasp from "./Animal/Wasp";
import Grass from "./plants/Grass";
import HolyOrchid from "./plants/HolyOrchid";
import BloodHerb from "./plants/BloodHerb";
import Mandrake from "./plants/Mandrake";

export default class Tile {
    currentOrganism = null;
    constructor(x, y, newOrganismPopup, board) {
        this.board = board;
        this.newOrganismPopup = newOrganismPopup;
        this.x = x;
        this.y = y;
        this.tileElement = document.createElement('div');
        this.tileElement.classList.add('one-tile');
        this.tileElement.addEventListener('click', () => {
            this.newOrganismPopup.openOrganismList(this);
        });
        this.closeOrganismListButton = document.querySelector('.close-button');
        this.closeOrganismListButton.addEventListener('click', () => {
            this.newOrganismPopup.closeOrganismList();
        });
    }
    createWolfOnClick = () => {
        return new Wolf(this.board.grid, this.x, this.y);
    };
    createTortoiseOnClick = () => {
        return new Tortoise(this.board.grid, this.x, this.y);
    };
    createSheepOnClick = () => {
        return new Sheep(this.board.grid, this.x, this.y);
    };
    createFoxOnClick = () => {
        return new Fox(this.board.grid, this.x, this.y);
    };
    createWaspOnClick = () => {
        return new Wasp(this.board.grid, this.x, this.y);
    };
    createGrassOnClick = () => {
        return new Grass(this.board.grid, this.x, this.y);
    };
    createHolyOrchidOnClick = () => {
        return new HolyOrchid(this.board.grid, this.x, this.y);
    };
    createBloodHerbOnClick = () => {
        return new BloodHerb(this.board.grid, this.x, this.y);
    };
    createMandrakeOnClick = () => {
        return new Mandrake(this.board.grid, this.x, this.y);
    };
}