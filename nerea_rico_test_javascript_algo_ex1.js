var to_verify = array_number;

function F11(table_digits) {
    var to_check = [];
    for (var i = 0; i < 9; i++) {
        to_check[i] = [];
        var numbers = table_digits[i].split(' ');
        for (var j = 0; j < 9; j++) {
            to_check[i][j] = parseInt(numbers[j]);
        }
    }
    return to_check;
}

function F12(to_verify) {
    var table = '<table border="1">';
    for (var i = 0; i < to_verify.length; i++) {
        table += '<tr>';
        for (var j = 0; j < to_verify[i].length; j++) {
            table += '<td>' + to_verify[i][j] + '</td>';
        }
        table += '</tr>';
    }
    table += '</table>';
    return table;
}

document.addEventListener("DOMContentLoaded", function () {
    var to_check = F11(to_verify);
    console.log(to_check);

    var table_to_display = F12(to_check);
    document.getElementById('table-container').innerHTML = table_to_display;
});
