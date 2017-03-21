function whatIsInAName(collection, source) { 
    var arr = [];
	arr = collection.filter(function(el){ // going through each element in collection
        return Object.keys(source).every(function(key){ // going through source's keys -> true/false
            return el[key] === source[key]; // true/false element in collection equals source
        });
    });

	return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });