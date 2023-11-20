var to_verify = new Array(9);
to_verify[0] = "4 9 5 2 7 3 6 8 1";
to_verify[1] = "6 1 3 9 4 8 7 5 2";
to_verify[2] = "8 2 7 5 6 1 4 3 9";
to_verify[3] = "7 6 1 8 2 4 5 9 3";
to_verify[4] = "9 5 8 6 3 7 2 1 4";
to_verify[5] = "2 3 4 1 5 9 8 6 7";
to_verify[6] = "1 7 9 4 8 5 3 2 6";
to_verify[7] = "3 8 2 7 9 6 1 4 5";
to_verify[8] = "5 4 6 3 1 2 9 7 8";

for (var i = 0; i < to_verify.length; i++) {
    to_verify[i] = to_verify[i].split(' ').map(Number);
}

function F11(table_digits) {
    var to_check = [];
    for (var i = 0; i < 9; i++) {
        to_check[i] = [];
        for (var j = 0; j < 9; j++) {
            to_check[i][j] = table_digits[i * 9 + j];
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
    var table_digits = [
        4, 9, 5, 2, 7, 3, 6, 8, 1,
        6, 1, 3, 9, 4, 8, 7, 5, 2,
        8, 2, 7, 5, 6, 1, 4, 3, 9,
        7, 6, 1, 8, 2, 4, 5, 9, 3,
        9, 5, 8, 6, 3, 7, 2, 1, 4,
        2, 3, 4, 1, 5, 9, 8, 6, 7,
        1, 7, 9, 4, 8, 5, 3, 2, 6,
        3, 8, 2, 7, 9, 6, 1, 4, 5,
        5, 4, 6, 3, 1, 2, 9, 7, 8
    ];

    var to_check = F11(table_digits);
    console.log(to_check);

    var table_to_display = F12(to_verify);
    document.getElementById('table-container').innerHTML = table_to_display;
});
