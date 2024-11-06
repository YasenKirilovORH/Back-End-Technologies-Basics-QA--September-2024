function addAndSubstract(num1, num2, num3)
{
    function sum(num1, num2)
    {
        return num1 + num2;
    }
    function substract(resultSum, num3)
    {
        return resultSum - num3;
    }

    let resultSum = sum(num1, num2);
    let finalResult = substract(resultSum, num3);

    console.log(finalResult);
}

addAndSubstract(23,
    6,
    10
    )