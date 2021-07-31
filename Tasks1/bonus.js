var num = prompt("Enter number of words");

var wordsArray = [];

//Taking words
for (var i = 0; i < num; i++) {
    wordsArray.push(prompt("Enter the " + (i + 1) + " word"));
}


var repeat = 0, distinct = [], check, mostRepeated = [], leastRepeated = [];

for (i = 0; i < wordsArray.length; i++) {
    check = 1;
    for (var j = 0; j < wordsArray.length; j++) {
        if ((wordsArray[i] === wordsArray[j]) && (i != j)) {
            wordsArray.splice(j, 1);
            repeat++;
            check++;
        }
    }

    if (check < 2) {
        leastRepeated.push(wordsArray[i]);
    }

    distinct.push(check);
}

console.log(wordsArray);


var maxNo, maxWord, descendingWords = [], descendingNo = [];
for (i = 0; i < wordsArray.length; i++) {

    maxNo = distinct[0];
    maxWord = wordsArray[0];


    for (j = wordsArray.length - 1; j >= 0; j--) {

        if ((maxNo <= distinct[j]) && (!descendingWords.includes(wordsArray[j]))) {
            maxNo = distinct[j];
            maxWord = wordsArray[j];
        }

    }

    descendingWords.push(maxWord);
    descendingNo.push(maxNo);

}


var mostRepeat = descendingNo[0];
mostRepeated.push(descendingWords[0]);

for (i = 1; i < descendingNo.length; i++) {
    if (mostRepeat === descendingNo[i]) {
        mostRepeated.push(descendingWords[i]);
    }
}


//Outputs
console.log("" + descendingWords);
console.log("" + descendingNo);
console.log("Most repeated word(s) are:" + mostRepeated);
console.log("Least repeated word(s) are:" + leastRepeated);


