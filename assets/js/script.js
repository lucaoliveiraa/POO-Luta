const log = new Log(document.querySelector(".log"));

const char = new Knight("Lucas");
const monster = new LittleMonster();
const bigMonster = new BigMonster();

console.log(char);
console.log(monster);
console.log(bigMonster);

const stage = new Stage(
    char,
    monster,
    document.querySelector("#char"),
    document.querySelector("#monster"),
    log,
);

stage.start();