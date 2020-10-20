//Remember that arrays start at the 0 index
let signature = ["Dre", "Jamal", "Taylor"];
console.log(signature[1]);

//Adding to an array
signature.push("James");
console.log(signature[3]);

//Remove last index from the array
signature.pop();
console.log(signature[3]);

//Check the length array
console.log(signature.length);

//Modify an element in an array
signature[0] = "Drevon";
console.log(signature[0]);

//Looping through an array
for(index = 0; index < signature.length; index++) {
    console.log(signature[index]);
}

//Looping through an array backwards
for(index = signature.length - 1; index >= 0; index--) {
    console.log(signature[index]);
}

/*In class assignment:
For every person in the class, create a variable with their name.
Add each person to an array, call flex2
Each student has a number assigned to them which is the age that you think they are
Loop though the array and print everyone who is under the age of 30.
*/

let Dre = {
    name: 'Dre',
    age: 27
}

let Larry = {
    name: 'Larry',
    age: 20
}

let Chad = {
    name: 'Chad',
    age: 32
}

let Logan = {
    name: 'Logan',
    age: 26
}

let Rashad = {
    name: 'Rashad',
    age: 28
}

let Hannelore = {
    name: 'Hannelore',
    age: 25
}

let Luqman = {
    name: 'Luqman',
    age: 40
}

let Matt = {
    name: 'Matt',
    age: 28
}

let Domineke = {
    name: 'Domineke',
    age: 25
}

let flex2 = [Larry, Dre, Chad, Domineke, Hannelore, Logan, Matt, Luqman, Rashad];
console.log("Students under 30");
for(i = 0; i < flex2.length; i++) {
    if(flex2[i].age < 30) {
        console.log(flex2[i].name);
    }
}
