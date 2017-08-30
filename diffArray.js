function diffArray(arr1, arr2) {
    var newArr = [];
    // Same, same; but different.
    // assume no duplicates
    let s1 = new Set(arr1);
    let s2 = new Set(arr2);
    for (let i of s1) {
        if (!s2.has(i)) {
            newArr.push(i);
        }
    }
    for (let i of s2) {
        if (!s1.has(i)) {
            newArr.push(i);
        }
    }
    return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]); // should return ["pink wool"]