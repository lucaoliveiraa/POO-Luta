class Character {

    _life = 1;
    maxLife = 1;
    attackPoints = 0;
    defensePoints = 0;

    constructor(name) {
        this.name = name;
    };

    get life() {
        return this._life;
    };

    set life(newLife) {
        this._life = newLife < 0 ? 0 : newLife;
    };
};

class Knight extends Character {
    constructor(name) {
        super(name);
        this.life = 100;
        this.attackPoints = 10;
        this.defensePoints = 8;
        this.maxLife = this.life;
    };
};

class Sorcerer extends Character {
    constructor(name) {
        super(name);
        this.life = 80;
        this.attackPoints = 15;
        this.defensePoints = 4;
        this.maxLife = this.life;
    };
};

class LittleMonster extends Character {
    constructor() {
        super("Little Monster");
        this.life = 40;
        this.attackPoints = 5;
        this.defensePoints = 4;
        this.maxLife = this.life;
    };
};

class BigMonster extends Character {
    constructor() {
        super("Big Monster");
        this.life - 120;
        this.attackPoints = 16;
        this.defensePoints = 5;
        this.maxLife = this.life;
    };
};

class Stage {
    constructor(fighter1, fighter2, fighter1El, fighter2El) {
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;
    };

    start() {
        this.update();

        this.fighter1El.querySelector(".attackButton").addEventListener("click", () => this.doAttack(this.fighter1, this.fighter2));
        this.fighter2El.querySelector(".attackButton").addEventListener("click", () => this.doAttack(this.fighter2, this.fighter1));
    };

    update() {
        // Fighter 1
        this.fighter1El.querySelector(".name").innerHTML = `${this.fighter1.name} - ${this.fighter1.life}HP`;
        const f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
        this.fighter1El.querySelector(".bar").style.width = `${f1Pct}%`;

        // Fighter 2
        this.fighter2El.querySelector(".name").innerHTML = `${this.fighter2.name} - ${this.fighter2.life}HP`;
        const f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
        this.fighter2El.querySelector(".bar").style.width = `${f2Pct}%`;

    };

    doAttack(attacking, attacked) {
        const list = document.getElementsByClassName(".log");
        list = list + `<li>${attacking.name} está atacando ${attacked.name}...<li>`;
        document.getElementsByClassName(".log").innerHTML = list;

        this.update();
    }
};