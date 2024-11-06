function sortingNumbers(arr)
{
    let sortedAscending = [...arr].sort((a, b) => a - b);
    let sortedDescending = [...arr].sort((a, b) => b - a);

    let result = [];
    let arrLength = arr.length;

    for (let i = 0; i < arrLength/2; i++)
    {
        result.push(sortedAscending[i]);
        if(result.length < arr.length)
        {
            result.push(sortedDescending[i]);
        }
    }

    return result;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));