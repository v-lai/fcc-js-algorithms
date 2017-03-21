
//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line
    var names = [];
    for (var i = 0; i < contacts.length; i++){
        if (contacts[i].firstName === name && contacts[i][prop]){
            return contacts[i][prop];
        } else if (contacts[i].firstName === name && !contacts[i][prop]){
            return "No such property";
        } else if (contacts[i].firstName !== name){
            names.push(contacts[i].firstName);
        }
    }
    if (names.length === contacts.length){
        return "No such contact";
    }
// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Akira", "likes");
