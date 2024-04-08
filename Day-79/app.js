//Example - 1
let heros = [["ironman", "spiderman", "thor", "starlord"], ["superman", "aquaman", "flash"]];

for (let i =0; i<heros.length; i++) {
    console.log(`list #${1}`);
    for (j=0; j<heros[i].length; j++) {
        console.log(heros[i][j]);
    }
}

// Example - 2
let student = [["aman", 96], ["rahul", 98], ["geeta", 99], ["aditya", 78]];

for (let i=0; i<student.length; i++) {
    console.log(`info of student #${i+1}`);

    for (let j=0; j<student[i].length; j++) {
        console.log(student[i][j]);
    }
}

// example 3 for of loop

for (char of "apnacollege") {
    console.log(char);
}

let names = ["Rahul", "Richard", "Geeta", "Suggu", "Sugiyaa"];

for (name of names) {
    console.log(name);
}

// nesting of for of loop
let heroes = [["ironman", "spiderman", "thor"], ["superman", "batman", "flash"]];

for (list of heroes) {
    console.log(list);
    for (hero of list) {
        console.log(hero);
    }
}

//