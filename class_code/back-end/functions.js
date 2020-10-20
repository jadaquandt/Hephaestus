//Function Declaration
function counter() {
    for(count = 0; count <=10; count++) {
        console.log("Count value: " + count);
    }
}

stat = 0;
function whileCount() {
    while (stat <= 10) {
        console.log("Stat value: " + stat++);
    }
}

//Call that function
counter();
//whileCount();

//Parameters are variables passed into the function
function mysteryFunction() {
    console.log("mystery");
}
function mysteryFunction(name) {
    console.log("My name is:" + name);
}




function calculateAvg(number1, number2) {
    console.log("Number1: " + number1);
    console.log("Number2: " + number2);

    return (number1 + number2)/2;
}

let myAvg = calculateAvg(10,20);
console.log("MyAvg is: " + myAvg);

list = [24, 25, 765];
function arrs(lists) {
    for (i = 0; i < lists.length; i++) {
        console.log(lists[i]);
    }
}
arrs(list);

//Scope is the visibility of a variable to a function
const magic = (power, defense) => {
    let light = {
        attack: power,
        special: 28,
        level: 6
    };

    let dark = {
        attack: power,
        special: 52,
        level: 10,
        hidden: '???'
    };

    let types = [light, dark];

    for(i = 0; i < types.length; i++) {
        let mage = "water";
        console.log(types[i].attack);
    }
    console.log(mage);
    return light;
}

let character = magic(32, 43);

console.log(dark);

if() {
    let cat ="jfow";
    if() {
        'et dog = "fjie"'
        if() {
            let = feuwi
        }

    }
}


