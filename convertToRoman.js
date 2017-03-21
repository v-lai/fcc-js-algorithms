function convertToRoman(num) {
    let numCopy = num;
    let roman = '';
    while (numCopy - 1000 >= 0){
        roman += 'M';
        numCopy -= 1000;
    }
    while (numCopy - 100 >= 0){
        if (numCopy - 900 >= 0){
            roman += 'CM';
            numCopy -= 900;
        } else if (numCopy - 500 >= 0){
            roman += 'D';
            numCopy -= 500;
        } else if (numCopy - 400 >= 0){
            roman += 'CD';
            numCopy -= 400;
        } else {
            roman += 'C';
            numCopy -= 100;
        }
    }
    while (numCopy - 10 >= 0){
        if (numCopy - 90 >= 0){
            roman += 'XC';
            numCopy -= 90;
        } else if (numCopy - 50 >= 0){
            roman += 'L';
            numCopy -= 50;
        } else if (numCopy - 40 >= 0){
            roman += 'XL';
            numCopy -= 40;
        } else {
            roman += 'X';
            numCopy -= 10;
        }
    }
    while (numCopy > 0){
        if (numCopy - 9 >= 0){
            roman += 'IX';
            numCopy -= 9;
        } else if (numCopy - 5 >= 0){
            roman += 'V';
            numCopy -= 5;
        } else if (numCopy - 4 >= 0){
            roman += 'IV';
            numCopy -= 4;
        } else {
            roman += 'I';
            numCopy -= 1;
        }
    }
    return roman;
}

convertToRoman(36);
