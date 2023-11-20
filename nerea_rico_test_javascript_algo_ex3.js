// F31: Check each row
function F31(to_check) {
    var errorTable = document.createElement('table');
    errorTable.border = "1";

    for (var i = 0; i < to_check.length; i++) {
        if (!F21(to_check[i])) {
            var row = errorTable.insertRow();
            var cell1 = row.insertCell(0);
            cell1.innerHTML = "Line " + (i + 1) + " incorrect";

            for (var j = 0; j < to_check[i].length; j++) {
                var cell = row.insertCell(j + 1);
                cell.innerHTML = to_check[i][j];
            }
        }
    }
	
	errorTable.style.marginTop = "20px";
    errorTable.style.marginBottom = "20px";

    document.getElementById('error-container').appendChild(errorTable);
}

// F32: Check each column
function F32(to_check) {
    var errorTable = document.createElement('table');
    errorTable.border = "1";

    for (var j = 0; j < to_check[0].length; j++) {
        var column = [];
        for (var i = 0; i < to_check.length; i++) {
            column.push(to_check[i][j]);
        }
        if (!F21(column)) {
            var row = errorTable.insertRow();
            var cell1 = row.insertCell(0);
            cell1.innerHTML = "Column " + (j + 1) + " incorrect";

            for (var i = 0; i < to_check.length; i++) {
                var cell = row.insertCell(i + 1);
                cell.innerHTML = to_check[i][j];
            }
        }
    }
	
	errorTable.style.marginTop = "20px";
    errorTable.style.marginBottom = "20px";

    document.getElementById('error-container').appendChild(errorTable);
}

// F33: Check each region
function F33(to_check) {
    var errorTable = document.createElement('table');
    errorTable.border = "1";

    for (var i = 0; i < to_check.length; i += 3) {
        for (var j = 0; j < to_check[i].length; j += 3) {
            var region = [];
            for (var x = i; x < i + 3; x++) {
                for (var y = j; y < j + 3; y++) {
                    region.push(to_check[x][y]);
                }
            }
            if (!F21(region)) {
                var row = errorTable.insertRow();
                var cell1 = row.insertCell(0);
                cell1.innerHTML = "Region " + ((i / 3) * 3 + (j / 3 + 1)) + " incorrect";  // Corregir la numeración de las regiones

                for (var k = 0; k < region.length; k++) {
                    var cell = row.insertCell(k + 1);
                    cell.innerHTML = region[k];
                }
            }
        }
    }

    errorTable.style.marginTop = "20px";
    errorTable.style.marginBottom = "20px";

    document.getElementById('error-container').appendChild(errorTable);
}



document.addEventListener("DOMContentLoaded", function () {
    var to_check = [
        [4, 9, 5, 2, 7, 3, 6, 8, 1],
        [6, 1, 3, 9, 4, 4, 7, 5, 2],
        [8, 2, 7, 5, 6, 1, 4, 3, 9],
        [7, 6, 1, 8, 2, 4, 5, 9, 3],
        [9, 5, 8, 1, 3, 7, 2, 1, 4],
        [2, 3, 4, 1, 5, 9, 8, 6, 7],
        [1, 7, 9, 4, 8, 5, 3, 2, 6],
        [3, 8, 2, 7, 9, 6, 1, 4, 5],
        [2, 4, 6, 3, 1, 2, 9, 7, 8]
    ];

    F31(to_check);
    F32(to_check);
    F33(to_check);

});

