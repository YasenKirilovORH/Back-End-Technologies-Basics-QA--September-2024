function printAndSum(input)
{
    startNumber = parseInt(input[0]);
    endNumber = parseInt(input[1]);
    let resultString = '';
    let sum = 0;
    for (let i = startNumber; i <= endNumber; i++)
    {
        resultString += i + ' ';
        sum += i;
    }

    console.log(resultString.trimEnd());
    console.log(`Sum: ${sum}`);
}

printAndSum([5, 10])