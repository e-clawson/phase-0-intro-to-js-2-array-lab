const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.push("Ralph");
}
function destructivelyPrependCat() {
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
const copyCats = ["Broom"];
function appendCat() {
    let copyCats = [...cats,"Broom"];
    return copyCats;
}
const copierCats = ["Arnold"];
function prependCat() {
    let copierCats = ["Arnold",...cats,];
    return copierCats;
}

function removeLastCat() {
    return cats.slice(0,cats.length - 1);
}
function removeFirstCat() {
    return cats.slice(cats.length-2);
}