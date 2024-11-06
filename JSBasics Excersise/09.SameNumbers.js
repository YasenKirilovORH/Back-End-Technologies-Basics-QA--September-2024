function checkIfAllNumbersAreTheSame(number)
{
    let numberToString = number.toString();
    
    let firstDigit = numberToString[0];
    let allNumbersAreSame = true;
    let sum = 0;

    for (let digit of numberToString)
    {
        if (digit !== firstDigit)
        {
            allNumbersAreSame = false;
        }
        sum += parseInt(digit);
    }

    console.log(allNumbersAreSame);
    console.log(sum);
}

checkIfAllNumbersAreTheSame(2222222)