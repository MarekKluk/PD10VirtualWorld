export default class NewOrganismPopup {
    constructor(board) {
        this.board = board;
        this.popup = document.querySelector('.popup-container');
        this.wolfTile = document.querySelector('.wolf-tile');
        this.scarabTile = document.querySelector('.scarab-tile');
        this.sheepTile = document.querySelector('.sheep-tile');
        this.foxTile = document.querySelector('.fox-tile');
        this.waspTile = document.querySelector('.wasp-tile');
        this.grassTile = document.querySelector('.grass-tile');
        this.holyOrchidTile = document.querySelector('.holy-orchid-tile');
        this.bloodHerbTile = document.querySelector('.blood-herb-tile');
        this.mandrakeTile = document.querySelector('.mandrake-tile');
        this.wolfTile.addEventListener('click', this.createWolf);
        this.scarabTile.addEventListener('click', this.createScarab);
        this.sheepTile.addEventListener('click', this.createSheep);
        this.foxTile.addEventListener('click', this.createFox);
        this.waspTile.addEventListener('click', this.createWasp);
        this.grassTile.addEventListener('click', this.createGrass);
        this.holyOrchidTile.addEventListener('click', this.createHolyOrchid);
        this.bloodHerbTile.addEventListener('click', this.createBloodHerb);
        this.mandrakeTile.addEventListener('click', this.createMandrake);
        this.overlay = document.getElementById('overlay');
    }
    addOrganismOnClick = (organism) => {
        if (this.tile.currentOrganism) {
            alert('This tile is occupied by another organism');
            return;
        }
        this.tile.currentOrganism = organism;
        this.closeOrganismList();
        this.board.refresh();
    };
    createWolf = () => {
        this.addOrganismOnClick(this.tile.createWolfOnClick());
    };
    createScarab = () => {
        this.addOrganismOnClick(this.tile.createScarabOnClick());
    };
    createSheep = () => {
        this.addOrganismOnClick(this.tile.createSheepOnClick());
    };
    createFox = () => {
        this.addOrganismOnClick(this.tile.createFoxOnClick());
    };
    createWasp = () => {
        this.addOrganismOnClick(this.tile.createWaspOnClick());
    };
    createGrass = () => {
        this.addOrganismOnClick(this.tile.createGrassOnClick());
    };
    createHolyOrchid = () => {
        this.addOrganismOnClick(this.tile.createHolyOrchidOnClick());
    };
    createBloodHerb = () => {
        this.addOrganismOnClick(this.tile.createBloodHerbOnClick());
    };
    createMandrake = () => {
        this.addOrganismOnClick(this.tile.createMandrakeOnClick());
    };
    openOrganismList(tile) {
        this.tile = tile;
        this.popup.classList.add('active');
        this.overlay.classList.add('active');
    }
    closeOrganismList() {
        this.popup.classList.remove('active');
        this.overlay.classList.remove('active');
    }
}
