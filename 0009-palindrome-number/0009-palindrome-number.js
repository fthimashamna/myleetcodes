/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str =x.toString();
    let result = "";
    for( let i = str.length-1;i>=0;i--){
        result += str[i];
    }
    if(str===result){
    return true;
}else{
    return false;
}
}
console.log(isPalindrome(121));
console.log(isPalindrome(234));