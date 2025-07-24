const removeFromArray = function(arr, ...itemsToRemove) {
  
    let newArr = [...new Set(arr)];

    for(let i = 0; i < itemsToRemove.length; i++){
        const itemIndex = newArr.indexOf(itemsToRemove[i]);
        
        if (itemIndex !== -1){
            newArr.splice(itemIndex, 1);
        }
    }

    return newArr;
};

console.log(removeFromArray(["hey", 2, 3, "ho"], "hey", 3))

// Do not edit below this line
module.exports = removeFromArray;
