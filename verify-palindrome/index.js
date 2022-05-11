
function isPalindrome(str){
    if(!str) return;
    return str.split("").reverse().join("") === str;
}

function isPalindrome2(str){
    if(!str) return;
    for(let i = 0; i < str.length/2; i++)
        if(str[i] !== str[str.length-1-i])
            return false;
    return true;
}

console.log(isPalindrome('ovo'));
console.log(isPalindrome2('ovox'));