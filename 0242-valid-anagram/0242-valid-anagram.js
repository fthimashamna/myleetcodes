/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
if(s.length !== t.length){
    return false;
}
let Sstring= s.split("").sort().join("");
let Tstring = t.split("").sort().join("");
return Sstring===Tstring;
        
};