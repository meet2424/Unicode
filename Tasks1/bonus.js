var num = prompt("Enter the number of words");

var wordsArray = [], distinct = [];

for (var i = 0; i < num; i++) {

    var take = prompt("Enter the " + (i + 1) + " word");
    var check = false;

    for (var j = 0; j < wordsArray.length; j++) {

        if (take === wordsArray[j]) {

            distinct[j] = distinct[j] + 1;
            check = true;
            break;

        }
    }
    if (!check) {
        wordsArray.push(take);
        distinct.push(1);
    }

}



//-----------------------------------------Bonus Starts From Here------------------------

//Taking First Lowest Repeated Word
var lowWord, lowNo;

for (i = 0; i < wordsArray.length; i++) {
    if (distinct[i] == 1) {
        lowWord = wordsArray[i];
        lowNo = distinct[i];
        break;
    }
}


//---------------------------------------Decending Occurance----------------------------
var maxNo, maxWord, descendingWords = [], descendingNo = [];
for (i = 0; i < wordsArray.length; i++) {

    maxNo = lowNo;
    maxWord = lowWord;


    for (j = wordsArray.length - 1; j >= 0; j--) {

        if ((maxNo <= distinct[j]) && (!descendingWords.includes(wordsArray[j]))) {
            maxNo = distinct[j];
            maxWord = wordsArray[j];
        }

    }

    descendingWords.push(maxWord);
    descendingNo.push(maxNo);

}


var mostRepeated = [], leastRepeated = [];


//----------------------------------------Most Repeated-----------------------------
var mostRepeat = descendingNo[0];
mostRepeated.push(descendingWords[0]);

for (i = 1; i < descendingNo.length; i++) {
    if (mostRepeat === descendingNo[i]) {
        mostRepeated.push(descendingWords[i]);
    }
}


//------------------------------------------Least Repeated---------------------------------
var leastRepeat = descendingNo[descendingNo.length - 1];
leastRepeated.push(descendingWords[descendingWords.length - 1]);

for (i = descendingNo.length - 2; i >= 0; i--) {
    if (leastRepeat === descendingNo[i]) {
        leastRepeated.push(descendingWords[i]);
    }
}



//--------------------------------------------------Outputs-------------------------------------
console.log("" + descendingWords);
console.log("" + descendingNo);
console.log("Most repeated word(s) are:" + mostRepeated);
console.log("Least repeated word(s) are:" + leastRepeated);


