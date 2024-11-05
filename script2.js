
let wysokosc = 20;
let wynik = "";

for (let i = 0; i < wysokosc; i++) {
    let wiersz = "";
    for (let j = 0; j < wysokosc - i; j++) {
        wynik += " ";
    }
    for (let k = 0; k < 2 * i - 1; k++) {
        wynik += "*";
    }
    wynik += "\n";
}
console.log(wynik);
