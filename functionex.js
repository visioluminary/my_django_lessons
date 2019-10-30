// function sleepIn(weekday, vacation) {
//    return (!weekday || vacation)
      
 
// }

// monkeyTrouble(aSmile, bSmile) {
//    return (aSmile && bSmile) || (!aSmile && !bSmile)
// }

// function stringTimes(str, n){
//     returnStr = ""
//     i = 0;
//     while (i<n) {
//         returnStr += str;
//         i++
//     }
//     return returnStr;
// }

var age = prompt("your age please")
function luckySum(a, b, c) {
    if (a==13) {
        return 0
    }
    
    if (b==13) {
        return a        
    }
    if (c==13) {
        return a + b
    }
    return a + b + c
}
