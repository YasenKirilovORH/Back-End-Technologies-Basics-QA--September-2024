function cookingByNumbers(input)
{
    let number = parseInt(input[0]);
    const operationsToPerform = input.slice(1);

    for (let operation of operationsToPerform)
    {
        switch (operation)
        {
            case 'chop':
                number /= 2;
                break;
            case 'dice':
                number = Math.sqrt(number);
                break;
            case 'spice':
                number += 1;
                break;
            case 'bake':
                number *= 3;
                break;
            case 'fillet':
                number = number * 0.80;
        }
        console.log(number);
    }
}

cookingByNumbers(['32', 'chop', 'chop', 'chop', 'chop', 'chop'])