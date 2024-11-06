function solve(n, inputArray) {

    let newArray = [];


    // Collect the first n elements from the original array
    for (let i = 0; i < n; i++) {

        newArray.push(inputArray[i]);
    }

    // Manually reverse the new array
    let reverserdArr = [];
    for (let i = newArray.length - 1; i >= 0; i--) {
        reverserdArr.push(newArray[i])
    }
    
    // Print the reversed array elements on a single line, space-separated
    console.log(reverserdArr.join(' '))
}

solve(3, [10, 20, 30, 40, 50]);