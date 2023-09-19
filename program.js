var username = "Armaan000000s";
var password = "12345678!9012";
var minUserLength = 10;
var minPassLength = 12;

// attempted to make a function for include for fun !!! DOES NOT WORK
// function include(string, value) {
//     for (var i = 0; i >= string.length; i++) {
//         var character = string[i];
//         console.log("")
//         if (character == value) {
//             console.log("congrats");
//         }
//     }
// }


if (username.length >= minUserLength && password.length >= minPassLength && (password.includes("!") || password.includes("?"))) {
    console.log("Congrats")
} else {
    console.log("fix your password or username")
    }




function intro(identity, name, hobby, show) {
    //you can use return to replace the function when you call it which allows you to store the function stuff in a variable//
    return (`
    Hello, I'm a BCIT ${identity}
    My name is ${name}
    My hobbies are ${hobby}
    My favorite show is ${show}
    `);
}

var msg = intro("Student", "Max", "Gaming", "Dragonball");
console.log(msg);