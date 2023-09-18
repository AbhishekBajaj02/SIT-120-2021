function calculator() {
    var grade1 = parseFloat(document.getElementById('Mathematics').value);
    var grade2 = parseFloat(document.getElementById('Physics').value);
    var grade3 = parseFloat(document.getElementById('Chemistry').value);
    var grade4 = parseFloat(document.getElementById('English').value);
    var avg = (grade1 + grade2 + grade3 + grade4) / 4;

    var display = document.getElementById('outputDiv');

    display.innerHTML = 'The Average Grade is: ' + avg;
}