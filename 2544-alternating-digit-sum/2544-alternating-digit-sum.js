/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
    let arr= n.toString();
    let sum =0;
    for(let i=0;i<arr.length;i++){
        let digit =Number(arr[i]);
        if(i%2===0){
            sum+=digit;
        }else{
            sum-=digit;
        }
    }
    return sum;
};