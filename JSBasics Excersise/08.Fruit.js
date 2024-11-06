function calculateTotalPriceForFruits(input)
{
    let fruitName = input[0];
    let weightInGrams = Number(input[1]);
    let pricePerKilogram = Number(input[2]);
    let weightInKilograms = weightInGrams / 1000;
    let moneyNeeded = weightInKilograms * pricePerKilogram;

    console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${weightInKilograms.toFixed(2)} kilograms ${fruitName}.`)
}

calculateTotalPriceForFruits(['orange', 2500, 1.80])