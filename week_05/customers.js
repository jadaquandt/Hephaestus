//-------------SOLUTION ONE (It works)----------//
// function formCheck() {
//     const ar = ['FirstName', 'LastName', 'Email', 'PhoneNumber'];

//     for (i in ar) {
//         const field = document.getElementById(ar[i]);
//         if (field.value == '') {
//             field.setAttribute('class', 'error')
//             return false;
//         } else {
//             field.setAttribute('class', '');
//         }
//     }
//     console.log('Form checks out good');
// }

// function removeError(element){
//     element.setAttribute('class', '');
// }

//------SOLUTION TWO (The Better One)------//

function formCheck() {
    const ar = document.getElementsByTagName('input');

    for (i in ar) {
        if (ar[i].value == '') {
            ar[i].setAttribute('class', 'error');
            return false;
        }
    }
    console.log('Form checks out good');
}

function removeError(element){
    element.setAttribute('class', '');
}