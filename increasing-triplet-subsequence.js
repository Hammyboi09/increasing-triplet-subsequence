/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var increasingTriplet = function(nums) {

    let firstNum = Infinity;
    let secoundNum = Infinity;
    
    for(let currentNum of nums){
    
        if(currentNum > secoundNum){
            return true;
        }
    
        if(currentNum > firstNum){
            secoundNum = currentNum;
        }else{
            firstNum = currentNum
        }
    }
    
    return false;
       
    };