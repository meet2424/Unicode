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

    // if(x<=check){
    //     x=check;
    //     mostRepeated.push(wordsArray[i]);
    // }
    // if(check<2){
    //     leastRepeated.push(wordsArray[i]);
    // }

    distinct.push(check);
}

console.log(num - repeat);
console.log("" + distinct);
// console.log("" + wordsArray);
//  console.log("Most repeated words are:"+mostRepeated);
//  console.log("Least repeated words are:"+leastRepeated);



