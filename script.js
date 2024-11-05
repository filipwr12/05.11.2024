
//zad1
console.log("Zadanie 1:");
for (let i = 1; i <= 11; i++) {
    if (i == 11) break;
    console.log(i);
};

//zad 2
console.log("Zadanie 2:");
let i = 1;
let x = 0;
while (i <= 100) {
    x += i;
    i++;
};
console.log(x);

//zad 3
console.log("Zadanie 3:");
let licznik = 10;
do {
    console.log(licznik);
    licznik--;
} while (licznik);

//zad4
console.log("Zadanie 4:");
const owoce = ["jabłko", "banan", "truskawka"];
for (let owoc of owoce) {
    console.log(owoc);
};

//zad5
console.log("Zadanie 5:");
const osoba = { imie: "Jan", nazwisko: "Kowalski", wiek: 25, };
for (let klucz in osoba) {
    console.log(klucz + ": " + osoba[klucz]);
};

//zad6
console.log("Zadanie 6:");
for (let i = 1; i <= 21; i++) {
    if (i == 21) break;
    if (i % 2 == 0) {
        console.log(i);
    };
};

//zad7
console.log("Zadanie 7:");
for (let i = 1; i < 16; i++) {
    if (i == 11) break;
    console.log(i);
}

//zad8
console.log("Zadanie 8:");
for (let i = 1; i < 11; i++) {
    if (i === 5) continue;
    console.log(i); // 0, 1, 2, 4
};

//zad9
console.log("Zadanie 9:");
let kwadraty = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (i of kwadraty) {
    console.log(i * i);
};

//BMI:
let waga = 50;
let wzrost = 1.85;

function obliczBMI(waga, wzrost) {
    BMI = waga / (wzrost * wzrost);

}

function klasyfikujBMI(BMI) {
    if (BMI < 18.5) {
        return "Niedowaga";
    }
    if (18.5 < BMI && BMI < 24.9) {
        return "Waga prawidłowa";
    }
    if (25 < BMI && BMI < 29.9) {
        return "Nadwaga";
    }
    if (BMI > 30) {
        return "Otyłość";
    }
}

function pokazBMI(waga, wzrost) {
    obliczBMI(waga, wzrost)
    console.log(klasyfikujBMI(BMI));
};
console.log(pokazBMI(waga, wzrost));
    




