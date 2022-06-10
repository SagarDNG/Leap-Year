const button = document.getElementById('button');
const result = document.getElementById('result');
const checkOtherYear = document.getElementById('checkOtherYear');
const year = document.getElementById('number');

button.addEventListener('click', check);

function check() {
    if (!year.value) {
        alert("Please enter some year, Don't leave it blank")
    }
    else {
        if (year.value % 4 === 0 || year.value % 400 === 0) {
            result.innerHTML = `Yes, ${year.value} is a Leap Year`;
        }
        else {
            result.innerHTML = `No, ${year.value} is not a Leap Year`;
        }
        checkOtherYear.innerHTML = "Now, Check a different Year!";
        year.value = '';
    }
}