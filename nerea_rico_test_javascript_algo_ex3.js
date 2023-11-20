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
function F33(to_check, original) {
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
                cell1.innerHTML = "Region " + ((i / 3) * 3 + (j / 3 + 1)) + " incorrect";

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
    var to_check = F11(to_verify);

    var table_to_display = F12(to_check);
    document.getElementById('table-container').innerHTML = table_to_display;

    F31(to_check);
    F32(to_check);
    F33(to_check, F11(array_number));
});