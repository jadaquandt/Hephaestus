/*Write an anonymous function named structure. that function should take in an array and loop through the contents using a while loop,
 adding each element of the array to a string. Loop through the array backwards.
 */

const structure = function(array) {
    index = array.length - 1;
    sentence = '';

    while(index >= 0) {
        sentence = sentence + array[index] + ' ';
        index--;
    }
    console.log(sentence);
}

array = ["boxer","a","is","dog","my"];
structure(array);