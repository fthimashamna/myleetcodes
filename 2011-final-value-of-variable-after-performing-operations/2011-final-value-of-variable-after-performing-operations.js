/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let X = 0;

    for (let operation of operations) {
        if (operation.includes("+")) {
            X++;
        } else {
            X--;
        }
    }

    return X;



};