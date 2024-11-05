//prostokat
console.log("Prostokat: ")
let wynik = "";
for (let i = 0; i < 5; i++) {
    let wiersz = " ";
    for (let j = 0; j < 5; j++) {
        wiersz += "*";
    }
    wynik += wiersz + "\n";
};
console.log(wynik);
//trojkat
console.log("Trojkat: ");
let n = 5;
for (let i = 1; i <= n; i++) {
    let str = "* ";
    console.log(str.repeat(i));
};

//trojkat
console.log("Trojkat: ");
let p = 5;
for (let i = 1; i <= p; i++) {
    let str = "* ";
    let space = '  ';
    console.log(space.repeat((n - i)) + str.repeat(i));
};
//trojkat
console.log("Trojkat: ");
let m = 5;
for (let i = m; i >= 1; i--) {
    let str = "* ";
    let space = '  ';
    console.log(space.repeat(m - i) + str.repeat(i));
}
//trojkat
console.log("Trojkat: ");
let g = 5;
for (let i = g; i >= 1; i--) {
    let str = "* ";
    console.log(str.repeat(i));
};

//cwiczenie
console.log("Dodatkowa figura: ")
let wynik1 = "";
for (let i = 0; i < 2; i++) {
    let wiersz = " ";
    for (let j = 0; j < 6; j++) {
        wiersz += "*";
    }
    wynik1 += wiersz + "\n";
};
console.log(wynik1);
let wynik2 = "";
for (let i = 0; i < 2; i++) {
    let wiersz = " ";
    for (let j = 0; j < 4; j++) {
        wiersz += "*";
    }
    wynik2 += wiersz + "\n";
};
console.log(wynik2);
let wynik3 = "";
for (let i = 0; i < 2; i++) {
    let wiersz = " ";
    for (let j = 0; j < 2; j++) {
        wiersz += "*";
    }
    wynik3 += wiersz + "\n";
};
console.log(wynik3);









