function oddAndEvenSum(number)
{
    let oddNumberSum = 0;
    let evenNumberSum = 0;

    let numberInString = number.toString();

    for (let digit of numberInString)
    {
        let currentDigitAsNumber = Number(digit);

        if (currentDigitAsNumber % 2 === 0)
        {
            evenNumberSum += currentDigitAsNumber;
        }
        else
        {
            oddNumberSum += currentDigitAsNumber;
        }
    }

    console.log(`Odd sum = ${oddNumberSum}, Even sum = ${evenNumberSum}`)
}

oddAndEvenSum(1000435)