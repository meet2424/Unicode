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

console.log(wordsArray.length);
console.log("" + distinct);