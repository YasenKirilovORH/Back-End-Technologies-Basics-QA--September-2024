function repeatString(input, count)
{
    let resultString = "";

    for(let i = 1; i <= count; i++)
    {
        resultString += input;
    }
    return resultString;
}
console.log(repeatString("abc", 3));