function F21(A) {
    for (var i = 0; i < A.length; i++) {
        if (typeof A[i] === 'number' && A[i] >= 1 && A[i] <= 9) {
            if (A.indexOf(A[i]) !== i) {
                console.log("Invalid input. All positions must be different.");
                return false;
            }
        } else {
            console.log("Invalid input. All positions must be numbers from 1 to 9.");
            return false;
        }
    }

    return true;
}